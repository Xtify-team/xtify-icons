//  const fg = ('');
import fg from "fast-glob";
import * as path from 'path'
import * as fs from 'fs';
const  svgs = fg.globSync(["./icons/*.svg"],{dot:true,objectMode: true,onlyFiles: true});

console.log();

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
fs.writeFileSync("./types/index.d.ts", 'declare type XtifyIcons='+svgs.map(({name})=>{
    return "\""+path.basename(name).replace(path.extname(name), "").toLocaleLowerCase()+"\"";
}).join("|"), {
})