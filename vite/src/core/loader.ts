export const URL_PREFIXES = ['/~xtify-icons/', '~xtify-icons/', 'virtual:xtify-icons', 'virtual:xtify-icons/', 'virtual/xtify-icons/'];


const iconPathRE = new RegExp(`${URL_PREFIXES.map(v => `^${v}`).join('|')}`);

export interface ResolvedIconPath {
  collection: string;
  icon: string;
  query: Record<string, string | undefined>;
}

export function isIconPath(path: string) {
  return iconPathRE.test(path);
}


export function normalizeIconPath(path: string) {
  return path.replace(iconPathRE, URL_PREFIXES[0]);
}


export function resolveIconsPath(path: string): ResolvedIconPath | null {
  if (!isIconPath(path))
    return null;

  path = path.replace(iconPathRE, '');

  const query: ResolvedIconPath['query'] = {};
  const queryIndex = path.indexOf('?');
  if (queryIndex !== -1) {
    const queryRaw = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
    new URLSearchParams(queryRaw).forEach((value, key) => {
      // configure raw compiler for empty and true values only
      if (key === 'raw')
        query.raw = (value === '' || value === 'true') ? 'true' : 'false';
      else
        query[key] = value;
    });
  }

  // remove extension
  path = path.replace(/\.\w+$/, '');

  const [collection, icon] = path.split('/');

  return {
    collection,
    icon,
    query,
  };
}
