export interface Options {
  /**
   * Scale of icons against 1em
   *
   * @default 1.2
   */
  scale?: number;

  /**
   * Style apply to icons by default
   *
   * @default ''
   */
  defaultStyle?: string;

  /**
   * Class names apply to icons by default
   *
   * @default ''
   */
  defaultClass?: string;

  /**
   * Transform raw `svg`.
   *
   * **WARNING**: `transform` will be only applied when using `custom` icon collection.
   *
   * @param svg The loaded `svg`
   * @param collection The name of the collection
   * @param icon The name of the icon
   * @return The transformed `svg`.
   */


  /**
   * Compiler
   *
   * - none: plain SVG content
   * - raw: an ESM module with a default exported string of the SVG HTML
   *
   * @default (detect automatically, fallback to 'vue3')
   */
  compiler?: 'jsx';

  /**
   * JSX style, works only when compiler set to `jsx`
   *
   * @default (detect automatically, fallback to 'react')
   */
  jsx?: 'react';

  /**
   * Config for Web Components compiler
   */
  webComponents?: {
    /**
     * Call `customElements.define` automatically on module importing
     */
    autoDefine?: boolean

    /**
     * Prefix for auto defining
     *
     * @default 'icon'
     */
    iconPrefix?: string

    /**
     * Use shadow DOM
     * @default false
     */
    shadow?: boolean
  };

}

export type ResolvedOptions = Omit<Required<Options>, 'iconSource' | 'transform'>
