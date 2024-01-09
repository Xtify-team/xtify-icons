import path from "path";

export const CWD = __dirname;
export const SRC = path.resolve(CWD,"./src");
export const DST = path.resolve(CWD,"./dist");

export const BASE_ICON_DIR = "src/*.svg";

export const only = (name) => path.basename(name).replace(path.extname(name), "");
export const resolve = (...rel: string[]) => path.resolve(CWD,...rel);
export const join = (...paths:string[])=>path.join(CWD,...paths);