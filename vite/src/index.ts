import {isIconPath, normalizeIconPath, resolveIconsPath} from "./core/loader";
import {Options} from './types';
import {generateComponent, generateComponentAll, generateComponentFromPath} from "./core/generator";

export function vitePluginsXtifyIcons(options: Options) {

    return {
        name: 'plugins-xtify-icons',
        enforce: 'pre',
        resolveId(id) {
            console.log(isIconPath(id));
            if (isIconPath(id)) {
                const normalizedId = normalizeIconPath(id);
                const queryIndex = normalizedId.indexOf('?');
                const res = `${(queryIndex > -1 ? normalizedId.slice(0, queryIndex) : normalizedId)
                    .replace(/\.\w+$/i, '')
                    .replace(/^\//, '')}${queryIndex > -1 ? `?${normalizedId.slice(queryIndex)}` : ''}`;
                const resolved = resolveIconsPath(res);
                const compiler = resolved?.query?.raw === 'true' ? 'raw' : options.compiler;

                if (compiler && typeof compiler !== 'string') {
                } else {
                  console.log(res,resolved)
                    if (!resolved.icon) {
                        return `${res}index.jsx?all=true`;
                    }
                    return `${res}.jsx`;
                }
            }
        },


        async load(id) {
            if (isIconPath(id)) {
                const normalizedId = normalizeIconPath(id);
                const query = id.split("?").at(-1).split("&").reduce((a, b) => {
                    const map = b.split("=");
                    const key = map[0];
                    const value = map[1];
                    return {
                        ...a,
                        [key]: JSON.parse(value)
                    };
                }, {});
                if (query['all']) {
                    const code = await generateComponentAll();
                    if (code) {
                        return {
                            code,
                            map: {version: 3, mappings: '', sources: []} as any,
                        };
                    }
                } else if (query['name']){
                  const code = await generateComponent(query['name']);
                  if (code) {
                    return {
                      code,
                      map: {version: 3, mappings: '', sources: []} as any,
                    }
                  }
                }
            }
        },
    };
}
