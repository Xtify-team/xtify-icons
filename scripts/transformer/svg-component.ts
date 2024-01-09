import svgrJsx from "@svgr/plugin-jsx";
import { transform } from '@svgr/core'

export const SvgCompilerToReact = (async (
    svg,
    componentName,
    options,
) => {
    // check for v6/v7 transform (v7 on CJS it is in default), v5 default and previous versions
    let res = await transform(
        svg,
        {
            jsxRuntime: options.jsx !== 'react' ? "automatic" : "classic",
            prettier: false,
            memo: options.jsx === 'react',
            plugins: [svgrJsx],
            icon: true,
            typescript: true 
        },
        {componentName},
    );
    // svgr does not provide an option to support preact (WHY?),
    // we manually remove the react import for preact
    return res;
});