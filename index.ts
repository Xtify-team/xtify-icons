
import _ from 'lodash';

import {importModule} from 'local-pkg';
import {COMPONENT_TSX, INDEX_D_TS, INDEX_TS, README} from "./scripts/template";
import {svgs} from "./scripts/getAllSvgs";
import {debug} from "./scripts/debug";
import toSpriteSvg from "./scripts/toSpriteSvg";
import { SvgCompilerToReact } from './scripts/transformer/svg-component';
import { only } from './DIR';


function writeDoc() {
    README({icon_list: svgs});
    return debug.success('write README.md success');
}



function writeCodeDefination() {
    const templateCode = async (name, content) => {
        return await SvgCompilerToReact(content, name, {
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
        COMPONENT_TSX({component_name: _name, component_content: await templateCode(_name, content)});
    });
    INDEX_TS({component_list: defination});
    INDEX_D_TS({component_list: defination});
}

writeDoc();
writeCodeDefination();
toSpriteSvg();
