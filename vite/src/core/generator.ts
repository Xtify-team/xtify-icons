import {ResolvedIconPath, resolveIconsPath} from "./loader";
import {ResolvedOptions} from "../types";
import IconsJSON, { XtifyIcons } from "xtify-icons";


export async function generateComponent(name: XtifyIcons, ) {
  // 生成单个 svg 组件
  let _path = IconsJSON[name];
    const content = fs.readFileSync(_path).toString();
  return await JSXCompiler(content,name,{
      scale: 0,
      defaultStyle: "",
      defaultClass: "",
      compiler: "jsx",
      jsx: "react",
      webComponents: {
        autoDefine: false,
        iconPrefix: "",
        shadow: false
  }});
}

export async function generateComponentFromPath(path: string, options: ResolvedOptions) {
  // const resolved = resolveIconsPath(path);
  // if (!resolved)
  //   return null;
  // return generateComponent(resolved, options);
}

import fs from 'fs';
import { JSXCompiler } from "./compiler/jsx";

export async function generateComponentAll() {
  let declared = Object.keys(IconsJSON).map((name :XtifyIcons) => {
    return `

    `
  });
  const res = await Promise.all(declared)
  // 需要生成全部的 svg
  return `
    export default function XtifyIcon({name}){
      return <>{name}</>
    }
    ${declared.join("\n")}
  `;
}
