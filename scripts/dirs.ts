import path from "path";
import {debug} from "./debug";
import fg from "fast-glob";

export const CWD = process.cwd();
export const BASE_ICON_DIR =
    fg.convertPathToPattern(path.normalize(path.relative(CWD, path.resolve(__dirname, "..", "src/*.svg"))));
export const resolve = (...rel: string[]) => path.resolve(__dirname, "..", ...rel);
export const DST = (...rel: string[]) => resolve("dist", ...rel);

export const only = (name) => path.basename(name).replace(path.extname(name), "");


debug.log("cwd", CWD);
debug.log("baseIconDir", BASE_ICON_DIR);
