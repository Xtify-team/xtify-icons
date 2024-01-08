import fg from "fast-glob";
import * as path from 'path';
import * as fs from 'fs';
import _ from 'lodash';

import {logger} from "xtify-shared";
import pkg from './package.json';

const sys = logger('xtify-icons');


sys.enabled();

const iconBase = path.relative(__dirname, "./src");
const cwd = process.cwd();
const only = (name) => path.basename(name).replace(path.extname(name), "");
const resolve = (rel: string) => path.resolve(__dirname, rel);
const templateTypes = (svgNames: string) => `export declare module '${pkg.name}' {
  export type XtifyIcons = ${svgNames};
  export default {} as Record<XtifyIcons,string>;
} `;
const templateDoc = (svgNames: string) => `
# Xtify Icons
## How to use 
\`\`\`shell
npm add xtify-icons@git+https://github.com/Xtify-team/xtify-icons.git
\`\`\`
### In React

\`\`\`jsx
import {XtifyIconAvatar} from '${pkg.name}';
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <XtifyIconAvatar></XtifyIconAvatar>
    </React.StrictMode>,
);
\`\`\`
### 图标详情
|图标名|图标样式|\n|---|---|\n${svgNames}`;

const svgs = fg.globSync(
    ["./src/*.svg"],
    {objectMode: true, onlyFiles: true, dot: true}
);

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
        return sys.error('error', err);
    }
    return sys.success('write README.md success');
}

function writeTypes() {
    const svgNames = svgs.map(({name}) => {
        return "\"" + path.basename(name).replace(path.extname(name), "").toLocaleLowerCase() + "\"";
    });
    try {
        fs.writeFileSync(resolve("./icons.d.ts"), templateTypes(svgNames.join("|")));
    } catch (err) {
        return sys.error('error', err);
    }
    return sys.success('write types/index.d.ts success');
}


function writeJSON() {
    // @ts-ignore
    const json = svgs.reduce((pre, {name, path: _path}) => {
        return {
            ...pre,
            [_.startCase(_.toLower(path.basename(name).replace(path.extname(name), ""))).split(" ").join("")]: path.resolve(__dirname, _path)
        };
    }, {});
    fs.writeFileSync(resolve("./icons.json"), JSON.stringify(json, null, 2));
}


import {importModule} from 'local-pkg';
import svgrJsx from "@svgr/plugin-jsx";


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
            memo: options.jsx !== 'react' ? false : true,
            plugins: [svgrJsx],
        },
        {componentName},
    );
    // svgr does not provide an option to support preact (WHY?),
    // we manually remove the react import for preact
    return res;
});

function writeCodeDefination() {
    const dist = resolve("dist/");
    const isExist = fs.existsSync(dist);
    if (!isExist) {
        fs.mkdirSync(dist, {
            recursive: true,
        });
    }
    const templateCode = async (name, path) => {
        let _path = path;
        const content = fs.readFileSync(_path).toString();
        return await JSXCompiler(content, name, {
            scale: 0,
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
    svgs.forEach(async ({name, path: _path}) => {
        let _name = _.startCase(_.toLower(only(name))).split(" ").join("");
        res += `export {default as XtifyIcon${_name}} from "./${_name}.jsx";`;
        defination += `export const XtifyIcon${_name}:typeof import("./${_name}");`;
        fs.writeFile(path.resolve(dist, _name + ".jsx"), await templateCode(_name, _path), null, (err) => {
            if (err) {
                sys.error(err);
            }
        });
    });
    fs.writeFile(path.resolve(dist, 'index' + ".jsx"), res, null, (err) => {
        if (err) {
            sys.error(err);
        }
    });
    fs.writeFile(path.resolve(dist, 'index.d.ts'), `
        declare module "xtify-icons" {
            ${defination}
        }
    `, null, (err) => {
        if (err) {
            sys.error(err);
        }
    });
}

writeDoc();
writeTypes();
writeJSON();
writeCodeDefination();
