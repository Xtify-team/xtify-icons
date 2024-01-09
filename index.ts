import * as path from 'path';
import * as fs from 'fs';
import _ from 'lodash';

import {importModule} from 'local-pkg';
import svgrJsx from "@svgr/plugin-jsx";
import {COMPONENT_JSX, INDEX_D_TS, INDEX_TS, README} from "./scripts/template";
import {svgs} from "./scripts/getAllSvgs";
import {debug} from "./scripts/debug";
import {DST, only, resolve} from "./scripts/dirs";
import toSpriteSvg from "./scripts/toSpriteSvg";


function writeDoc() {
    README({icon_list: svgs});
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

    const defination: { name: string }[] = [];
    svgs.forEach(async ({name, path: _path, content}) => {
        let _name = _.startCase(_.toLower(only(name))).split(" ").join("");
        defination.push({name: _name});
        COMPONENT_JSX({component_name: _name, component_content: await templateCode(_name, content)});
    });
    INDEX_TS({component_list: defination});
    INDEX_D_TS({component_list: defination});
}

writeDoc();
writeCodeDefination();
toSpriteSvg();
