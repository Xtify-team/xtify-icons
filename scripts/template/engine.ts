import path from "path";
import * as fs from "fs";
import Mustache from "mustache";
import pkg from "../../package.json";
import { debug } from "../debug";

const TEMPL_SOURCE_URL = path.resolve(__dirname, "./mustache");
const TEMPL_DST_CWD = __dirname;
const DST_DIR = path.resolve(TEMPL_DST_CWD, "../../dist");

const COMPONENT_TSX_SOURCE_URL = path.join(
  TEMPL_SOURCE_URL,
  "./tsx/{{component}}.tsx.mustache"
);
const COMPONENT_TSX_DST_URL = path.join(DST_DIR, "./tsx/");
const COMPONENT_CSS_DST_URL = path.join(DST_DIR, "./css/");

const README_SOURCE_URL = path.resolve(TEMPL_SOURCE_URL, "./README.mustache");
const README_DST_URL = path.resolve(TEMPL_DST_CWD, "../../", "./README.md");

const INDEX_TS_SOURCE_URL = path.join(
  TEMPL_SOURCE_URL,
  "./tsx/index.tsx.mustache"
);
const INDEX_TS_DST_URL = path.join(COMPONENT_TSX_DST_URL, "./index.tsx");

const INDEX_CSS_SOURCE_URL = path.join(
  TEMPL_SOURCE_URL,
  "./css/index.css.mustache"
);
const INDEX_CSS_DST_URL = path.join(COMPONENT_CSS_DST_URL, "./index.css");

const SPRITE_CSS_SOURCE_URL = path.join(
  TEMPL_SOURCE_URL,
  "./css/sprite.css.mustache"
);

[DST_DIR, COMPONENT_TSX_DST_URL, COMPONENT_CSS_DST_URL].forEach((dir) => {
  if (fs.existsSync(dir)) return;
  return fs.mkdirSync(dir, {
    recursive: true,
  });
});
/**
 * Writes the rendered README file to a destination URL.
 *
 * @param {string} pkg_name - The name of the package.
 * @param {Array} icon_list - A list of icons.
 */
export const README = ({ icon_list }: { icon_list: Array<{ name: string }> }) =>
  fs.writeFileSync(
    README_DST_URL,
    Mustache.render(fs.readFileSync(README_SOURCE_URL).toString(), {
      pkg_name: pkg.name,
      icon_list,
    })
  );

const INDEX_D_TS_SOURCE_URL = path.join(
  TEMPL_SOURCE_URL,
  "./tsx/index.d.ts.mustache"
);
const INDEX_D_TS_DST_URL = path.resolve(DST_DIR, "./tsx/index.d.ts");
export const INDEX_D_TS = ({
  component_list,
}: {
  component_list: { name: string }[];
}) =>
  fs.writeFileSync(
    INDEX_D_TS_DST_URL,
    Mustache.render(fs.readFileSync(INDEX_D_TS_SOURCE_URL).toString(), {
      pkg_name: pkg.name,
      component_list,
    })
  );

export const COMPONENT_TSX = async ({
  component_name,
  component_content,
}: {
  component_name: string;
  component_content: string;
}) =>
  fs.writeFile(
    path.join(COMPONENT_TSX_DST_URL, `./${component_name}.tsx`),
    Mustache.render(fs.readFileSync(COMPONENT_TSX_SOURCE_URL).toString(), {
      component_content,
    }),
    (err) => {
      if (err) {
        debug.error("err", err);
      }
    }
  );

export const INDEX_TS = ({
  component_list,
}: {
  component_list: { name: string }[];
}) =>
  fs.writeFileSync(
    INDEX_TS_DST_URL,
    Mustache.render(fs.readFileSync(INDEX_TS_SOURCE_URL).toString(), {
      pkg_name: pkg.name,
      component_list,
    })
  );

export const INDEX_CSS = ({}) =>
  fs.writeFile(
    INDEX_CSS_DST_URL,
    Mustache.render(fs.readFileSync(INDEX_CSS_SOURCE_URL).toString(), {}),
    (err) => {
      if (err) {
        return debug.error("err", err);
      }
      return debug.success(INDEX_CSS_DST_URL, "created");
    }
  );

