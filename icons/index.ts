import fg from "fast-glob";
import * as path from 'path';
import * as fs from 'fs';
import {optimize} from "svgo";
import _ from 'lodash';

import SVGCompiler from 'svg-baker';
import {logger} from "xtify-shared";
import pkg from './package.json';

const sys = logger('xtify-icons');


sys.enabled();

const iconBase = path.relative(__dirname,"./src");
const cwd = process.cwd();
const resolve = (rel: string) => path.resolve(__dirname, rel);
const templateTypes = (svgNames: string) => `export declare module '${pkg.name}' {
  export type XtifyIcons = ${svgNames};
  export default {} as Record<XtifyIcons,string>;
} `;
const templateDoc = (svgNames: string) => `|图标名|图标样式|\n|---|---|\n${svgNames}`;
const svgs = fg.globSync(
  [ "./src/*.svg"],
  {objectMode: true, onlyFiles: true, dot: true}
);

function writeDoc() {

// Constant	Octal	Description
// fs.constants.S_IRUSR	0o400	read by owner
// fs.constants.S_IWUSR	0o200	write by owner
// fs.constants.S_IXUSR	0o100	execute/search by owner
// fs.constants.S_IRGRP	0o40	read by group
// fs.constants.S_IWGRP	0o20	write by group
// fs.constants.S_IXGRP	0o10	execute/search by group
// fs.constants.S_IROTH	0o4	read by others
// fs.constants.S_IWOTH	0o2	write by others
// fs.constants.S_IXOTH	0o1	execute/search by others
  const svgTables = svgs.map(({name, path: _path}) => {
    return `|${path.basename(name).replace(path.extname(name), "").toLocaleLowerCase()}|![${name}](${_path})|`;
  });
  try {
    fs.writeFileSync(resolve("./README.md"), templateDoc(svgTables.join('\n')));
  } catch (err) {
    return sys.error('error', err);
  }
  return sys.success('write README.md success');
}

function writeTypes() {
  const svgNames = svgs.map(({name}) => {
    return "\"" + path.basename(name).replace(path.extname(name), "").toLocaleLowerCase() + "\"";
  });
  try {
    fs.writeFileSync(resolve("./icons.d.ts"), templateTypes(svgNames.join("|")));
  } catch (err) {
    return sys.error('error', err);
  }
  return sys.success('write types/index.d.ts success');
}


function writeJSON() {
  // @ts-ignore
  const json = svgs.reduce((pre, {name, path: _path}) => {
    return {
      ...pre,
      [_.startCase(_.toLower(path.basename(name).replace(path.extname(name), ""))).split(" ").join("")]: path.resolve(__dirname, _path)
    };
  }, {});
  fs.writeFileSync(resolve("./icons.json"), JSON.stringify(json, null, 2));
}

writeDoc();
writeTypes();
writeJSON();
