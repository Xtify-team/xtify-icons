import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const QrCodeReaderGenerator = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M11 7H7V11H11V7Z" fill="url(#paint0_linear_334_3843)" /><path d="M11 25H7V29H11V25Z" fill="url(#paint1_linear_334_3843)" /><path fillRule="evenodd" clipRule="evenodd" d="M7.75015 1.75H10.2499C11.0475 1.74998 11.7207 1.74997 12.2722 1.79503C12.8497 1.84221 13.403 1.94498 13.9295 2.21322C14.7292 2.62069 15.3793 3.27085 15.7868 4.07054C16.055 4.59699 16.1578 5.15026 16.205 5.72782C16.25 6.27933 16.25 6.95255 16.25 7.75017V8H18V11H16.2484C16.2451 11.4792 16.2351 11.9029 16.205 12.2722C16.1578 12.8497 16.055 13.403 15.7868 13.9295C15.5842 14.3271 15.3216 14.6878 15.0104 15H20V19H24V26H21.25V21H20V30H17.5V28.5H16.25C16.2495 29.1892 16.2452 29.7793 16.205 30.2722C16.1578 30.8497 16.055 31.403 15.7868 31.9295C15.3793 32.7292 14.7292 33.3793 13.9295 33.7868C13.403 34.055 12.8497 34.1578 12.2722 34.205C11.7207 34.25 11.0475 34.25 10.2499 34.25H7.75017C6.95257 34.25 6.27932 34.25 5.72782 34.205C5.15026 34.1578 4.59699 34.055 4.07054 33.7868C3.27085 33.3793 2.62069 32.7292 2.21322 31.9295C1.94498 31.403 1.84221 30.8497 1.79503 30.2722C1.74997 29.7207 1.74998 29.0475 1.75 28.2499V25.7502C1.74998 24.9525 1.74997 24.2793 1.79503 23.7278C1.84221 23.1503 1.94498 22.597 2.21322 22.0705C2.62069 21.2709 3.27085 20.6207 4.07054 20.2132C4.37174 20.0598 4.68172 19.9604 5 19.8947V18H8V19.75H10.2499C11.0475 19.75 11.7207 19.75 12.2722 19.795C12.5193 19.8152 12.762 19.8456 13 19.8947V19H15V15.0104C14.6878 15.3216 14.3271 15.5842 13.9295 15.7868C13.403 16.055 12.8497 16.1578 12.2722 16.205C11.9029 16.2351 11.4792 16.2451 11 16.2484V18H8V16.25H7.75017C6.95255 16.25 6.27933 16.25 5.72782 16.205C5.15026 16.1578 4.59699 16.055 4.07054 15.7868C3.27085 15.3793 2.62069 14.7292 2.21322 13.9295C1.94498 13.403 1.84221 12.8497 1.79503 12.2722C1.74997 11.7207 1.74998 11.0475 1.75 10.2499V7.75015C1.74998 6.95254 1.74997 6.27933 1.79503 5.72782C1.84221 5.15026 1.94498 4.59699 2.21322 4.07054C2.62069 3.27085 3.27085 2.62069 4.07054 2.21322C4.59699 1.94498 5.15026 1.84221 5.72782 1.79503C6.27933 1.74997 6.95254 1.74998 7.75015 1.75ZM17.5 25V21H15.0104C15.3216 21.3122 15.5842 21.6729 15.7868 22.0705C16.055 22.597 16.1578 23.1503 16.205 23.7278C16.2351 24.0971 16.2451 24.5208 16.2484 25H17.5ZM5.9314 4.28672C5.50844 4.32128 5.3208 4.382 5.20552 4.44074C4.87623 4.60852 4.60852 4.87623 4.44074 5.20552C4.382 5.3208 4.32128 5.50844 4.28672 5.9314C4.25097 6.36895 4.25 6.9393 4.25 7.8V10.2C4.25 11.0607 4.25097 11.6311 4.28672 12.0686C4.32128 12.4916 4.382 12.6792 4.44074 12.7945C4.60852 13.1238 4.87623 13.3915 5.20552 13.5593C5.3208 13.618 5.50844 13.6787 5.9314 13.7133C6.36895 13.749 6.9393 13.75 7.8 13.75H10.2C11.0607 13.75 11.6311 13.749 12.0686 13.7133C12.4916 13.6787 12.6792 13.618 12.7945 13.5593C13.1238 13.3915 13.3915 13.1238 13.5593 12.7945C13.618 12.6792 13.6787 12.4916 13.7133 12.0686C13.749 11.6311 13.75 11.0607 13.75 10.2V7.8C13.75 6.9393 13.749 6.36895 13.7133 5.9314C13.6787 5.50844 13.618 5.3208 13.5593 5.20552C13.3915 4.87623 13.1238 4.60852 12.7945 4.44074C12.6792 4.382 12.4916 4.32128 12.0686 4.28672C11.6311 4.25097 11.0607 4.25 10.2 4.25H7.8C6.9393 4.25 6.36895 4.25097 5.9314 4.28672ZM5.20552 22.4407C5.3208 22.382 5.50844 22.3213 5.9314 22.2867C6.36895 22.251 6.9393 22.25 7.8 22.25H10.2C11.0607 22.25 11.6311 22.251 12.0686 22.2867C12.4916 22.3213 12.6792 22.382 12.7945 22.4407C13.1238 22.6085 13.3915 22.8762 13.5593 23.2055C13.618 23.3208 13.6787 23.5084 13.7133 23.9314C13.749 24.3689 13.75 24.9393 13.75 25.8V28.2C13.75 29.0607 13.749 29.6311 13.7133 30.0686C13.6787 30.4916 13.618 30.6792 13.5593 30.7945C13.3915 31.1238 13.1238 31.3915 12.7945 31.5593C12.6792 31.618 12.4916 31.6787 12.0686 31.7133C11.6311 31.749 11.0607 31.75 10.2 31.75H7.8C6.9393 31.75 6.36895 31.749 5.9314 31.7133C5.50844 31.6787 5.3208 31.618 5.20552 31.5593C4.87623 31.3915 4.60852 31.1238 4.44074 30.7945C4.382 30.6792 4.32128 30.4916 4.28672 30.0686C4.25097 29.6311 4.25 29.0607 4.25 28.2V25.8C4.25 24.9393 4.25097 24.3689 4.28672 23.9314C4.32128 23.5084 4.382 23.3208 4.44074 23.2055C4.60852 22.8762 4.87623 22.6085 5.20552 22.4407Z" fill="url(#paint2_linear_334_3843)" /><path d="M25 7H29V11H25V7Z" fill="url(#paint3_linear_334_3843)" /><path fillRule="evenodd" clipRule="evenodd" d="M18 8V5H19.8947C19.9604 4.68172 20.0598 4.37174 20.2132 4.07054C20.6207 3.27085 21.2709 2.62069 22.0705 2.21322C22.597 1.94498 23.1503 1.84221 23.7278 1.79503C24.2793 1.74997 24.9525 1.74998 25.7502 1.75H28.2499C29.0475 1.74998 29.7207 1.74997 30.2722 1.79503C30.8497 1.84221 31.403 1.94498 31.9295 2.21322C32.7292 2.62069 33.3793 3.27085 33.7868 4.07054C34.055 4.59699 34.1578 5.15026 34.205 5.72782C34.25 6.27932 34.25 6.95251 34.25 7.75011V10.2498C34.25 11.0474 34.25 11.7207 34.205 12.2722C34.1578 12.8497 34.055 13.403 33.7868 13.9295C33.3793 14.7292 32.7292 15.3793 31.9295 15.7868C31.403 16.055 30.8497 16.1578 30.2722 16.205C29.9029 16.2351 29.4792 16.2451 29 16.2484V20H25V16.2484C24.5208 16.2451 24.0971 16.2351 23.7278 16.205C23.1503 16.1578 22.597 16.055 22.0705 15.7868C21.2709 15.3793 20.6207 14.7292 20.2132 13.9295C19.945 13.403 19.8422 12.8497 19.795 12.2722C19.75 11.7207 19.75 11.0475 19.75 10.2499V8H18ZM23.9314 4.28672C23.5084 4.32128 23.3208 4.382 23.2055 4.44074C22.8762 4.60852 22.6085 4.87623 22.4407 5.20552C22.382 5.3208 22.3213 5.50844 22.2867 5.9314C22.251 6.36895 22.25 6.9393 22.25 7.8V10.2C22.25 11.0607 22.251 11.6311 22.2867 12.0686C22.3213 12.4916 22.382 12.6792 22.4407 12.7945C22.6085 13.1238 22.8762 13.3915 23.2055 13.5593C23.3208 13.618 23.5084 13.6787 23.9314 13.7133C24.3689 13.749 24.9393 13.75 25.8 13.75H28.2C29.0607 13.75 29.6311 13.749 30.0686 13.7133C30.4916 13.6787 30.6792 13.618 30.7945 13.5593C31.1238 13.3915 31.3915 13.1238 31.5593 12.7945C31.618 12.6792 31.6787 12.4916 31.7133 12.0686C31.749 11.6311 31.75 11.0607 31.75 10.2V7.8C31.75 6.9393 31.749 6.36895 31.7133 5.9314C31.6787 5.50844 31.618 5.3208 31.5593 5.20552C31.3915 4.87623 31.1238 4.60852 30.7945 4.44074C30.6792 4.382 30.4916 4.32128 30.0686 4.28672C29.6311 4.25097 29.0607 4.25 28.2 4.25H25.8C24.9393 4.25 24.3689 4.25097 23.9314 4.28672Z" fill="url(#paint4_linear_334_3843)" /><path fillRule="evenodd" clipRule="evenodd" d="M24 34.25H21.25V29H24V27H26V23H30V27L27 27V30.5L24 30.5V34.25ZM28.0145 31L28 34.25H28.2498C29.0475 34.25 29.7207 34.25 30.2722 34.205C30.8497 34.1578 31.403 34.055 31.9295 33.7868C32.7292 33.3793 33.3793 32.7292 33.7868 31.9295C34.055 31.403 34.1578 30.8497 34.205 30.2722C34.25 29.7207 34.25 29.0475 34.25 28.2498V26H31V31L28.0145 31ZM30 23V19.75H34.25V23H30Z" fill="url(#paint5_linear_334_3843)" /><defs><linearGradient id="paint0_linear_334_3843" x1={18} y1={1.75} x2={18} y2={34.25} gradientUnits="userSpaceOnUse"><stop stopColor="#29A4F4" /><stop offset={1} stopColor="#1389D7" /></linearGradient><linearGradient id="paint1_linear_334_3843" x1={18} y1={1.75} x2={18} y2={34.25} gradientUnits="userSpaceOnUse"><stop stopColor="#29A4F4" /><stop offset={1} stopColor="#1389D7" /></linearGradient><linearGradient id="paint2_linear_334_3843" x1={18} y1={1.75} x2={18} y2={34.25} gradientUnits="userSpaceOnUse"><stop stopColor="#29A4F4" /><stop offset={1} stopColor="#1389D7" /></linearGradient><linearGradient id="paint3_linear_334_3843" x1={18} y1={1.75} x2={18} y2={34.25} gradientUnits="userSpaceOnUse"><stop stopColor="#29A4F4" /><stop offset={1} stopColor="#1389D7" /></linearGradient><linearGradient id="paint4_linear_334_3843" x1={18} y1={1.75} x2={18} y2={34.25} gradientUnits="userSpaceOnUse"><stop stopColor="#29A4F4" /><stop offset={1} stopColor="#1389D7" /></linearGradient><linearGradient id="paint5_linear_334_3843" x1={18} y1={1.75} x2={18} y2={34.25} gradientUnits="userSpaceOnUse"><stop stopColor="#29A4F4" /><stop offset={1} stopColor="#1389D7" /></linearGradient></defs></svg>;
const Memo = memo(QrCodeReaderGenerator);
export default Memo;