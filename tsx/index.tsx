import * as React from "react";
export { default as XtifyIconAsciiToHex } from "./AsciiToHex";
export { default as XtifyIconAvatar } from "./Avatar";
export { default as XtifyIconAvatarNotlogin } from "./AvatarNotlogin";
export { default as XtifyIconBackslashEscape1 } from "./BackslashEscape1";
export { default as XtifyIconBackslashEscape } from "./BackslashEscape";
export { default as XtifyIconBase64ImageEncodeDecode } from "./Base64ImageEncodeDecode";
export { default as XtifyIconBase64StringEncodeDecode } from "./Base64StringEncodeDecode";
export { default as XtifyIconCssBeautifyMinify } from "./CssBeautifyMinify";
export { default as XtifyIconColorConverter } from "./ColorConverter";
export { default as XtifyIconCronJobParser } from "./CronJobParser";
export { default as XtifyIconErbBeautifyMinify } from "./ErbBeautifyMinify";
export { default as XtifyIconEmpty1 } from "./Empty1";
export { default as XtifyIconEmpty2 } from "./Empty2";
export { default as XtifyIconHtmlBeautifyMinify } from "./HtmlBeautifyMinify";
export { default as XtifyIconHtmlEntityEncodeDecode } from "./HtmlEntityEncodeDecode";
export { default as XtifyIconHtmlPreview } from "./HtmlPreview";
export { default as XtifyIconHtmlToJsx } from "./HtmlToJsx";
export { default as XtifyIconHashGenerator } from "./HashGenerator";
export { default as XtifyIconHexToAscii } from "./HexToAscii";
export { default as XtifyIconJsBeautifyMinify } from "./JsBeautifyMinify";
export { default as XtifyIconJsonFormatValidate } from "./JsonFormatValidate";
export { default as XtifyIconJsonToYaml } from "./JsonToYaml";
export { default as XtifyIconLessBeautifyMinify } from "./LessBeautifyMinify";
export { default as XtifyIconLoremIpsumGenerator } from "./LoremIpsumGenerator";
export { default as XtifyIconMarkdownPreview } from "./MarkdownPreview";
export { default as XtifyIconNew } from "./New";
export { default as XtifyIconNumberBaseConverter } from "./NumberBaseConverter";
export { default as XtifyIconPlaceholder } from "./Placeholder";
export { default as XtifyIconQrCodeReaderGenerator } from "./QrCodeReaderGenerator";
export { default as XtifyIconRandomStringGenerator } from "./RandomStringGenerator";
export { default as XtifyIconRegexpTester } from "./RegexpTester";
export { default as XtifyIconScssBeautifyMinify } from "./ScssBeautifyMinify";
export { default as XtifyIconSqlFormatter } from "./SqlFormatter";
export { default as XtifyIconStringCaseConverter } from "./StringCaseConverter";
export { default as XtifyIconTextDiffChecker } from "./TextDiffChecker";
export { default as XtifyIconUrlEncodeDecode } from "./UrlEncodeDecode";
export { default as XtifyIconUrlParser } from "./UrlParser";
export { default as XtifyIconUuidUlidGenerateDecode } from "./UuidUlidGenerateDecode";
export { default as XtifyIconUnixTimeConverter } from "./UnixTimeConverter";
export { default as XtifyIconXmlBeautifyMinify } from "./XmlBeautifyMinify";
export { default as XtifyIconYamlToJson } from "./YamlToJson";

export default function({name,...props}:{name:string}):React.JSX.Element {
	return <i className={`xtify-icon ${name}`} {...props}></i>
}
