import SVGSpriter from "svg-sprite";
import {svgs} from "./getAllSvgs";
import File from 'vinyl';
import path from "path";
import * as fs from "fs";
import {DST} from "./dirs";
import _ from "lodash";

const sprite = new SVGSpriter(
    {
        multipass: true,
        svg: {
            doctypeDeclaration: false,
            xmlDeclaration: false
        },
        shape: {
            id: { // SVG shape ID related options
                separator: "",
                generator(__: string, file: File) { /*...*/
                    return _.toLower(file.name);
                }, // SVG shape ID generator callback
            },
            transform: [{
                svgo: {
                    multipass: true,
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    removeUnknownsAndDefaults: {
                                        keepRoleAttr: true
                                    },
                                    removeViewBox: false
                                }
                            }
                        },
                        'cleanupListOfValues',
                        'convertStyleToAttrs',
                        'sortAttrs',
                        {
                            name: 'removeAttrs',
                            params: {
                                attrs: [
                                    'clip-rule',
                                    'data-name'
                                ]
                            }
                        }
                    ]
                }
            }]
        }
    }
);
export default function toSpriteSvg() {
    svgs.forEach(({name, path: _path, content}) => {
        const file = new File({
            base: path.resolve(__dirname, "..", "dist"),
            path: path.dirname(_path),
            name: name,
            contents: Buffer.from(content),
        });
        sprite.add(file);
    });
    sprite.compile({
        min: {
            mode: 'css',// Sprite with «css» mode,
            dest: 'min',
            dimensions: true,
            prefix: ".xtify-icon.%s",
            sprite: "./sprite.css.svg",
            bust: true,
            render: {
                css: true,
            },
            mixin: `
                display: inline-block;
            `,
            example: true,
        },
    }, (error, result: Record<string, File>, data) => {
        Object.keys(result).forEach(key => {
            for (const type of Object.values(result[key])) {
                fs.mkdirSync(DST("css"), {recursive: true});
                fs.writeFileSync(path.join(DST("css"), path.basename(type.path)), type.contents);
            }
        });
    });
    fs.writeFileSync(
        path.join(DST("css"), "index.css"),
        `
        @import "./sprite.css";
        .xtify-icon {
            display: inline-block;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        `.replace(/\s+/g, "")
    );
}
