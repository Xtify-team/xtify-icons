import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const RegexpTester = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M31.25 7.75015V28.2499C31.25 29.0475 31.25 29.7207 31.205 30.2722C31.1578 30.8497 31.055 31.403 30.7868 31.9295C30.3793 32.7291 29.7291 33.3793 28.9295 33.7868C28.403 34.055 27.8497 34.1578 27.2722 34.205C26.7207 34.25 26.0475 34.25 25.2499 34.25H10.7501C9.95252 34.25 9.27932 34.25 8.72782 34.205C8.15026 34.1578 7.59699 34.055 7.07054 33.7868C6.27085 33.3793 5.62068 32.7291 5.21322 31.9295C4.94498 31.403 4.84221 30.8497 4.79503 30.2722C4.74996 29.7207 4.74998 29.0475 4.75 28.2499L4.75 7.75012C4.74998 6.95252 4.74997 6.27932 4.79503 5.72782C4.84221 5.15026 4.94498 4.59699 5.21322 4.07054C5.62069 3.27085 6.27085 2.62069 7.07054 2.21322C7.59699 1.94498 8.15026 1.84221 8.72782 1.79503C9.27933 1.74997 9.95254 1.74998 10.7502 1.75L25.2499 1.75C26.0475 1.74998 26.7207 1.74997 27.2722 1.79503C27.8497 1.84221 28.403 1.94498 28.9295 2.21322C29.7292 2.62069 30.3793 3.27085 30.7868 4.07054C31.055 4.597 31.1578 5.15026 31.205 5.72782C31.25 6.27933 31.25 6.95254 31.25 7.75015Z" fill="#33C481" /><path d="M9.09055 25.226H12.8645V29H9.09055V25.226Z" fill="#094928" /><path d="M21.6853 11.753L26.7143 9.873L27.6543 12.129L22.5313 13.915L25.6333 18.192L23.7063 19.649L20.4633 15.137L17.4083 19.649L15.2933 18.192L18.3483 13.915L13.3663 12.129L14.2123 9.873L19.1943 11.753V6.442H21.6853V11.753Z" fill="#094928" /></svg>;
const Memo = memo(RegexpTester);
export default Memo;
