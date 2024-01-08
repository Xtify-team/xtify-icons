import path from 'path';
import SVGSpriter from 'svg-sprite';

const memo = {};

export const spriter = new Proxy(new SVGSpriter({
  dest: path.resolve(__dirname)
}), {
  get(target,key){
    if (key === 'add') {
      return (...args)=>{
        if (memo[args[0]]) return;
        memo[args[0]] = true;
        return target[key](...args);
      }
    }
    return target[key];
  }
});


