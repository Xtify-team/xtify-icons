import Debug from "debug";

export  const logger = (namespace:string)=>{
    const log = Debug(`${namespace}:log`);
    const error = Debug(`${namespace}:error`);
    const warn = Debug(`${namespace}:warn`);
    const success = Debug(`${namespace}:success`);
    return {
        log,
        error,
        warn,
        success,
        enabled(){
            log.enabled = true;
            error.enabled = true;
            warn.enabled = true;
            success.enabled = true;
        },
        disabled(){
            log.enabled = false;
            error.enabled = false;
            warn.enabled = false;
            success.enabled = false;
        }
    }
}
export const debug = logger('xtify-icons');
debug.enabled();
