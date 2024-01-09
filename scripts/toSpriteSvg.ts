import {svgs} from "./getAllSvgs";
import File from 'vinyl';
import path from "path";
import { sprite } from "./transformer/svg-sprite";
import { INDEX_CSS } from "./template";
import { debug } from "./debug";
import fs from 'fs';
import { DST, resolve } from "../DIR";

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
            hasMixin: true,
            includeDimensions: true,
            dimensions: true,
            prefix: ".xtify-icon.%s",
            sprite: "./sprite.css.svg",
            bust: true,
            render: {
                css: false,
            },
            example: false,
        },
    }, (error, result: Record<string, File>, data) => {
        Object.keys(result).forEach(key => {
            for (const type of Object.values(result[key])) {
                fs.mkdirSync(resolve(DST,"css"), {recursive: true});
                fs.writeFileSync(path.join(resolve(DST,"css"), path.basename(type.path)), type.contents);
            }
        });
    });
    INDEX_CSS({})
}

