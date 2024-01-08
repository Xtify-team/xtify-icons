import * as path from 'path';
import * as fs from 'fs';
import _ from 'lodash';

import {importModule} from 'local-pkg';
import svgrJsx from "@svgr/plugin-jsx";
import {templateDoc} from "./scripts/template";
import {svgs} from "./scripts/getAllSvgs";
import {debug} from "./scripts/debug";
import {DST, only, resolve} from "./scripts/dirs";
import toSpriteSvg from "./scripts/toSpriteSvg";




function writeDoc() {

// Constant	Octal	Description
// fs.constants.S_IRUSR	0o400	read by owner
// fs.constants.S_IWUSR	0o200	write by owner
// fs.constants.S_IXUSR	0o100	execute/search by owner
// fs.constants.S_IRGRP	0o40	read by group
// fs.constants.S_IWGRP	0o20	write by group
// fs.constants.S_IXGRP	0o10	execute/search by group
// fs.constants.S_IROTH	0o4	read by others
// fs.constants.S_IWOTH	0o2	write by others
// fs.constants.S_IXOTH	0o1	execute/search by others
    const svgTables = svgs.map(({name, path: _path}) => {
        return `|${path.basename(name).replace(path.extname(name), "").toLocaleLowerCase()}|![${name}](${_path})|`;
    });
    try {
        fs.writeFileSync(resolve("./README.md"), templateDoc(svgTables.join('\n')));
    } catch (err) {
        return debug.error('error', err);
    }
    return debug.success('write README.md success');
}


export const JSXCompiler = (async (
    svg,
    componentName,
    options,
) => {
    const svgrCore = await importModule('@svgr/core');
    // check for v6/v7 transform (v7 on CJS it is in default), v5 default and previous versions
    const svgr = svgrCore.transform // v6 or v7 ESM
        || (svgrCore.default ? (svgrCore.default.transform /* v7 CJS */ ?? svgrCore.default) : svgrCore.default)
        || svgrCore;
    let res = await svgr(
        svg,
        {
            jsxRuntime: options.jsx !== 'react' ? "automatic" : "classic",
            prettier: false,
            memo: options.jsx === 'react',
            plugins: [svgrJsx],
        },
        {componentName},
    );
    // svgr does not provide an option to support preact (WHY?),
    // we manually remove the react import for preact
    return res;
});

function writeCodeDefination() {
    const dist = DST("jsx");
    const isExist = fs.existsSync(dist);
    if (!isExist) {
        fs.mkdirSync(dist, {
            recursive: true,
        });
    }
    const templateCode = async (name, content) => {
        return await JSXCompiler(content, name, {
            defaultStyle: "",
            defaultClass: "",
            compiler: "jsx",
            jsx: "react",
            webComponents: {
                autoDefine: false,
                iconPrefix: "",
                shadow: false
            }
        });
    };

    let res = "";
    let defination = "";
    svgs.forEach(async ({name, path: _path, content}) => {
        let _name = _.startCase(_.toLower(only(name))).split(" ").join("");
        res += `export {default as XtifyIcon${_name}} from "./${_name}.jsx";`;
        defination += `export const XtifyIcon${_name}:typeof import("./${_name}");`;
        fs.writeFile(path.resolve(dist, _name + ".jsx"), await templateCode(_name, content),
            null,
            (err) => {
                if (err) {
                    debug.error(err);
                }
            });
    });
    fs.writeFile(path.resolve(dist, 'index' + ".jsx"), `
    import "../css/index.css";
    ${res}
    export default function XtifyIcon(name, ...props) {
        return <i className={\`xtify-icon \${name}\`} {...props}></i>
    } 
    `, null, (err) => {
        if (err) {
            debug.error(err);
        }
    });
    fs.writeFile(path.resolve(dist, 'index.d.ts'), `
        declare module "xtify-icons" {
            ${defination}
        }
    `, null, (err) => {
        if (err) {
            debug.error(err);
        }
    });
}

writeDoc();
writeCodeDefination();
toSpriteSvg();
