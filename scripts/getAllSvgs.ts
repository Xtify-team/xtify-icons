import fg, {Entry} from "fast-glob";
import {BASE_ICON_DIR, CWD, only} from "./dirs";
import * as fs from "fs";


export const withSvgContent = (svgs: Entry[]) => svgs
    .map(({name, path}) => {
        return {
            name: only(name),
            path,
            content: fs.readFileSync(path).toString(),
        };
    });

export const svgs = withSvgContent(fg.globSync(
    [BASE_ICON_DIR],
    {objectMode: true, onlyFiles: true, dot: true, cwd: CWD}
));
