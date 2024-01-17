import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const HashGenerator = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M14.5 4.5C14.5 3.11929 13.3807 2 12 2C10.6193 2 9.5 3.11929 9.5 4.5V9.5H4.5C3.11929 9.5 2 10.6193 2 12C2 13.3807 3.11929 14.5 4.5 14.5H9.5V21.5H4.5C3.11929 21.5 2 22.6193 2 24C2 25.3807 3.11929 26.5 4.5 26.5H9.5V31.5C9.5 32.8807 10.6193 34 12 34C13.3807 34 14.5 32.8807 14.5 31.5V26.5H21.5V31.5C21.5 32.8807 22.6193 34 24 34C25.3807 34 26.5 32.8807 26.5 31.5V26.5H31.5C32.8807 26.5 34 25.3807 34 24C34 22.6193 32.8807 21.5 31.5 21.5H26.5V14.5H31.5C32.8807 14.5 34 13.3807 34 12C34 10.6193 32.8807 9.5 31.5 9.5H26.5V4.5C26.5 3.11929 25.3807 2 24 2C22.6193 2 21.5 3.11929 21.5 4.5V9.5H14.5V4.5ZM21.5 21.5V14.5H14.5V21.5H21.5Z" fill="url(#paint0_linear_336_3971)" /><defs><linearGradient id="paint0_linear_336_3971" x1={18} y1={2} x2={18} y2={34} gradientUnits="userSpaceOnUse"><stop stopColor="#CC4AFB" /><stop offset={1} stopColor="#8C24E0" /></linearGradient></defs></svg>;
const Memo = memo(HashGenerator);
export default Memo;
