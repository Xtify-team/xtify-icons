import SVGSpriter from "svg-sprite";
import _ from "lodash";

export const sprite = new SVGSpriter(
    {
        multipass: true,
        svg: {
            doctypeDeclaration: false,
            xmlDeclaration: false
        },
        shape: {
            id: { // SVG shape ID related options
                separator: "",
                generator(__: string, file: File) { /*...*/
                    return _.toLower(file.name);
                }, 
            },
            transform: [{
                svgo: {
                    multipass: true,
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: {
                                    removeUnknownsAndDefaults: {
                                        keepRoleAttr: true
                                    },
                                    removeViewBox: false
                                }
                            }
                        },
                        'cleanupListOfValues',
                        "cleanupAttrs",
                        'convertStyleToAttrs',
                        'sortAttrs',
                        {
                            name: 'removeAttrs',
                            params: {
                                attrs: [
                                    'clip-rule',
                                    'data-name',
                                    'width',
                                    'height'
                                ]
                            }
                        }
                    ]
                }
            }]
        }
    }
);