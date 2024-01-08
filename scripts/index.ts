import fg from "fast-glob";
import * as path from 'path';
import * as fs from 'fs';
import {optimize} from "svgo";
import _ from 'lodash';

import SVGCompiler from 'svg-baker';
import {logger} from "xtify-shared";

const sys = logger('xtify-icons');
sys.enabled();

const cwd = process.cwd();
const resolve = (rel: string) => path.resolve(cwd, rel);
const templateTypes = (svgNames: string) => `export declare type XtifyIcons = ${svgNames}`;
const templateDoc = (svgNames: string) => `|图标名|图标样式|\n|---|---|\n${svgNames}`;
const svgs = fg.globSync(
  [path.relative(cwd, resolve("./icons/")) + "/*.svg"],
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
    fs.writeFileSync(resolve("./types/index.d.ts"), templateTypes(svgNames.join("|")));
  } catch (err) {
    return sys.error('error', err);
  }
  return sys.success('write types/index.d.ts success');
}


export async function compilerIcon(
  file: string,
  symbolId: string,
  svgOptions: {},
): Promise<string | null> {
  if (!file) {
    return null;
  }

  let content = fs.readFileSync(file, 'utf-8');

  if (svgOptions) {
    const {data} = optimize(content, svgOptions);
    content = data || content;
  }

  // fix cannot change svg color  by  parent node problem
  content = content.replace(/stroke="[a-zA-Z#0-9]*"/, 'stroke="currentColor"');
  const svgSymbol = new SVGCompiler().addSymbol({
    id: symbolId,
    content,
    path: file,
  });
  return svgSymbol.render();
}

function writeJSON() {
  const json = svgs.reduce((pre, {name, path: _path}) => {
    return [...pre, {
      name: _.startCase(_.toLower(path.basename(name).replace(path.extname(name), ""))).split(" ").join(""),
      path: path.resolve(__dirname, "..", _path)
    }];
  }, []);
  fs.writeFileSync(path.resolve(__dirname, "..", "icons.json"), JSON.stringify(json, null, 2));
}

writeDoc();
writeTypes();
writeJSON();
