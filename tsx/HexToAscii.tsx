import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const HexToAscii = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><g clipPath="url(#clip0_352_5701)"><path fillRule="evenodd" clipRule="evenodd" d="M15.7502 15.75L29.2499 15.75C30.0475 15.75 30.7207 15.75 31.2722 15.795C31.8497 15.8422 32.403 15.945 32.9295 16.2132C33.7292 16.6207 34.3793 17.2709 34.7868 18.0705C35.055 18.597 35.1578 19.1503 35.205 19.7278C35.25 20.2793 35.25 20.9525 35.25 21.7501L35.25 29.2499C35.25 30.0475 35.25 30.7207 35.205 31.2722C35.1578 31.8497 35.055 32.403 34.7868 32.9295C34.3793 33.7291 33.7291 34.3793 32.9295 34.7868C32.403 35.055 31.8497 35.1578 31.2722 35.205C30.7207 35.25 30.0474 35.25 29.2498 35.25H15.7502C14.9526 35.25 14.2793 35.25 13.7278 35.205C13.1503 35.1578 12.597 35.055 12.0705 34.7868C11.2709 34.3793 10.6207 33.7291 10.2132 32.9295C9.94498 32.403 9.84221 31.8497 9.79503 31.2722C9.74997 30.7207 9.74998 30.0475 9.75 29.2499L9.75 21.7502C9.74998 20.9525 9.74997 20.2793 9.79503 19.7278C9.84221 19.1503 9.94498 18.597 10.2132 18.0705C10.6207 17.2709 11.2709 16.6207 12.0705 16.2132C12.597 15.945 13.1503 15.8422 13.7278 15.795C14.2793 15.75 14.9525 15.75 15.7502 15.75Z" fill="url(#paint0_linear_352_5701)" /><path fillRule="evenodd" clipRule="evenodd" d="M6.75015 0.750001L20.2499 0.750001C21.0475 0.749982 21.7207 0.749965 22.2722 0.795026C22.8497 0.842214 23.403 0.944983 23.9295 1.21322C24.7292 1.62069 25.3793 2.27085 25.7868 3.07054C26.055 3.597 26.1578 4.15026 26.205 4.72782C26.25 5.27932 26.25 5.95252 26.25 6.75012L26.25 14.2499C26.25 15.0475 26.25 15.7207 26.205 16.2722C26.1578 16.8497 26.055 17.403 25.7868 17.9295C25.3793 18.7291 24.7291 19.3793 23.9295 19.7868C23.403 20.055 22.8497 20.1578 22.2722 20.205C21.7207 20.25 21.0474 20.25 20.2498 20.25H6.75021C5.95257 20.25 5.27934 20.25 4.72782 20.205C4.15026 20.1578 3.59699 20.055 3.07054 19.7868C2.27085 19.3793 1.62069 18.7291 1.21322 17.9295C0.944983 17.403 0.842214 16.8497 0.795025 16.2722C0.749965 15.7207 0.749981 15.0475 0.750001 14.2499L0.750001 6.75015C0.749982 5.95254 0.749966 5.27933 0.795026 4.72782C0.842215 4.15026 0.944984 3.59699 1.21322 3.07054C1.62069 2.27085 2.27085 1.62069 3.07054 1.21322C3.597 0.944983 4.15026 0.842214 4.72782 0.795025C5.27933 0.749965 5.95254 0.749981 6.75015 0.750001Z" fill="#0E904D" /><path d="M10.5544 12.3731L9.65088 13.2637L11.0068 14.5979L9.65088 15.9332L10.5544 16.8226L11.9114 15.4879L13.2673 16.8221L14.1703 15.9326L12.8145 14.5984L14.1703 13.2637L13.2668 12.3731L11.9109 13.7079L10.5544 12.3731ZM5.79146 8.5506C4.89982 8.5506 4.17035 9.28821 4.17035 10.1901V15.1066C4.17035 16.0167 4.89982 16.7462 5.79092 16.7462H7.41202C8.31125 16.7462 9.03259 16.0167 9.03259 15.1066V10.1901C9.03259 9.28821 8.31125 8.5506 7.41202 8.5506H5.79146ZM5.79146 10.1901H7.41202V15.1066H5.79092L5.79146 10.1901Z" fill="white" /><path fillRule="evenodd" clipRule="evenodd" d="M30.1318 25.7008H31.5V31.088H30.1318V25.7008ZM18.5024 25.7009H16.8349L13.5 31.0881H14.9964L15.4668 30.233H17.1769V31.0881H18.5024V25.7009ZM16.1081 29.1215L17.2625 27.0691L17.2198 29.1215H16.1081ZM29.5332 25.7008H28.1652V31.088H29.5332V25.7008ZM21.7091 27.6248H23.1199V26.6415C23.1199 26.6415 23.1628 25.7008 22.2221 25.7008H19.7851C19.614 25.7008 18.9727 25.8718 18.9727 26.5987V27.411C18.9727 27.4965 18.9727 27.7958 19.443 28.0951C19.9133 28.3944 21.5381 29.3778 21.5381 29.3778C21.5381 29.3778 21.7518 29.4633 21.7518 29.7198C21.7518 29.9764 21.6236 29.9764 21.4525 29.9764H20.5546C20.5546 29.9764 20.3408 30.0191 20.3408 29.7626V29.1214H18.9727V30.1901C18.9727 30.1901 18.9299 31.088 19.956 31.088H22.1793C22.3076 31.088 23.0772 31.0454 23.0772 30.2329V29.3778C23.0772 29.3778 23.1628 28.9502 22.6496 28.6083L20.4691 27.3256C20.4691 27.3256 20.2981 27.1973 20.2981 27.069C20.2981 26.9834 20.3408 26.7697 20.5546 26.7697H21.4953C21.4953 26.7697 21.7091 26.7697 21.7091 27.0262V27.6248ZM24.8729 29.7626V29.1214H24.873V27.1118C24.873 26.9834 24.873 26.7697 25.1296 26.7697H26.0701C26.0701 26.7697 26.284 26.8125 26.284 27.069V27.6248H27.6949V26.6415C27.6949 26.6415 27.6949 25.7008 26.7542 25.7008H24.3599C24.1889 25.7008 23.5476 25.8718 23.5475 26.5987V30.1901C23.5475 30.1901 23.5047 31.088 24.5309 31.088H26.7542C26.8824 31.088 27.652 31.0454 27.652 30.2329V29.164H26.2839V29.7198C26.2839 30.0191 26.2411 30.0191 26.1128 30.0191H25.0439C25.0439 30.0191 24.8729 30.0619 24.8729 29.7626Z" fill="white" /><path d="M23.75 15C23.75 14.3096 23.1904 13.75 22.5 13.75C21.8096 13.75 21.25 14.3096 21.25 15L21.25 19H19.7963C19.2272 19 18.9427 19 18.804 19.1147C18.6835 19.2144 18.6166 19.3646 18.6231 19.5209C18.6306 19.7007 18.821 19.9122 19.2017 20.3352L21.3107 22.6786C21.7226 23.1362 21.9285 23.365 22.171 23.4495C22.3841 23.5237 22.6159 23.5237 22.829 23.4495C23.0715 23.365 23.2774 23.1362 23.6893 22.6786L25.7983 20.3352C26.179 19.9122 26.3694 19.7007 26.3769 19.5209C26.3834 19.3646 26.3165 19.2144 26.196 19.1147C26.0573 19 25.7728 19 25.2037 19H23.75V15Z" fill="#CAE2F6" /></g><defs><linearGradient id="paint0_linear_352_5701" x1={22.5} y1={15.75} x2={22.5} y2={35.25} gradientUnits="userSpaceOnUse"><stop stopColor="#008AE8" /><stop offset={1} stopColor="#0161A7" /></linearGradient><clipPath id="clip0_352_5701"><rect width={36} height={36} fill="white" /></clipPath></defs></svg>;
const Memo = memo(HexToAscii);
export default Memo;