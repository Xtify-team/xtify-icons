import Debug from "debug";

const log = Debug('xtify-icon:log');
const error = Debug("xtify-icon:error");
const warn = Debug("xtify-icon:warn");
const success = Debug("xtify-icon:success");
log.enabled = true;
error.enabled = true;
warn.enabled = true;
success.enabled = true;

export {
    log,
    error,
    warn,
    success,
}
