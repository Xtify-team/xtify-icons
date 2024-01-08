import {defineBuildConfig} from "unbuild";

export default defineBuildConfig({
  name: "bundle",
  clean: true,
  declaration: true,
  failOnWarn: false
});
