import Template from 'template';
import path from "path";
import * as fs from "fs";
import Mustache from 'mustache';
import pkg from "../../package.json";
import {debug} from "../debug";
import {minify} from 'minify';

const TEMPL_SOURCE_URL = path.resolve(__dirname, "./mustache");
const TEMPL_DST_CWD = __dirname;
const DST_DIR = path.resolve(TEMPL_DST_CWD, "../../dist");

if (!fs.existsSync(DST_DIR)) {
    fs.mkdirSync(DST_DIR, {
        recursive: true
    });
}

const README_SOURCE_URL = path.resolve(TEMPL_SOURCE_URL, "./README.mustache");
const README_DST_URL = path.resolve(TEMPL_DST_CWD, "../../", "./README.md");
/**
 * Writes the rendered README file to a destination URL.
 *
 * @param {string} pkg_name - The name of the package.
 * @param {Array} icon_list - A list of icons.
 */
export const README = ({icon_list}: {
    icon_list: Array<{ name: string }>;
}) =>
    fs.writeFileSync(README_DST_URL, Mustache.render(fs.readFileSync(README_SOURCE_URL).toString(), {
        pkg_name: pkg.name,
        icon_list
    }));

const INDEX_D_TS_SOURCE_URL = path.join(TEMPL_SOURCE_URL, "./jsx/index.d.ts.mustache");
const INDEX_D_TS_DST_URL = path.resolve(DST_DIR, "./jsx/index.d.ts");
export const INDEX_D_TS = ({component_list}: {
    component_list: ({ name: string })[]
}) =>
    fs.writeFileSync(
        INDEX_D_TS_DST_URL,
        Mustache.render(fs.readFileSync(INDEX_D_TS_SOURCE_URL).toString(), {
            pkg_name: pkg.name,
            component_list
        })
    );

export const COMPONENT_JSX_SOURCE_URL = path.join(TEMPL_SOURCE_URL, "./jsx/{{component}}.jsx.mustache");
export const COMPONENT_JSX_DST_URL = path.join(DST_DIR, "./jsx/");
export const COMPONENT_JSX = async ({component_name, component_content}: {
    component_name: string,
    component_content: string
}) =>
    fs.writeFile(
        path.join(COMPONENT_JSX_DST_URL, `./${component_name}.jsx`),
        Mustache.render(fs.readFileSync(COMPONENT_JSX_SOURCE_URL).toString(), {
            component_content
        }),
        (err) => {
            if (err) {
                debug.error('err', err);
            }
        }
    );

export const INDEX_TS_SOURCE_URL = path.join(TEMPL_SOURCE_URL, "./jsx/index.tsx.mustache");
export const INDEX_TS_DST_URL = path.join(DST_DIR, "./jsx/index.tsx");
export const INDEX_TS = ({component_list}: {
    component_list: ({ name: string })[]
}) => fs.writeFileSync(
    INDEX_TS_DST_URL,
    Mustache.render(fs.readFileSync(INDEX_TS_SOURCE_URL).toString(), {
        pkg_name: pkg.name,
        component_list
    })
);
