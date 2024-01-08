import {ResolvedIconPath, resolveIconsPath} from "./loader";
import {ResolvedOptions} from "../types";

export async function generateComponent({collection, icon, query}: ResolvedIconPath, options: ResolvedOptions) {
  return
}

export async function generateComponentFromPath(path: string, options: ResolvedOptions) {
  const resolved = resolveIconsPath(path);
  if (!resolved)
    return null;
  return generateComponent(resolved, options);
}

import IconsJSON from "../icons/icons.json";
import {escape} from "lodash";

export async function generateComponentAll(path: string, options: ResolvedOptions) {
  let declare = IconsJSON.map(({name, path}) => {
    return `"${name}": ()=>import("~xtify-icons/${name}")`;
  });
  return `export default {${declare.join(",")}}`;
}
