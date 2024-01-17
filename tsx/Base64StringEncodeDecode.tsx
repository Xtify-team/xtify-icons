import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const Base64StringEncodeDecode = (props: SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.75015 4.75H28.2499C29.0475 4.74998 29.7207 4.74997 30.2722 4.79503C30.8497 4.84221 31.403 4.94498 31.9295 5.21322C32.7291 5.62069 33.3793 6.27085 33.7868 7.07054C34.055 7.59699 34.1578 8.15026 34.205 8.72782C34.25 9.27932 34.25 9.95252 34.25 10.7501V25.2499C34.25 26.0475 34.25 26.7207 34.205 27.2722C34.1578 27.8497 34.055 28.403 33.7868 28.9295C33.3793 29.7291 32.7291 30.3793 31.9295 30.7868C31.403 31.055 30.8497 31.1578 30.2722 31.205C29.7207 31.25 29.0475 31.25 28.2499 31.25H7.75012C6.95252 31.25 6.27932 31.25 5.72782 31.205C5.15026 31.1578 4.59699 31.055 4.07054 30.7868C3.27085 30.3793 2.62069 29.7291 2.21322 28.9295C1.94498 28.403 1.84221 27.8497 1.79503 27.2722C1.74997 26.7207 1.74998 26.0475 1.75 25.2499V10.7501C1.74998 9.95254 1.74997 9.27933 1.79503 8.72782C1.84221 8.15026 1.94498 7.59699 2.21322 7.07054C2.62069 6.27085 3.27085 5.62069 4.07054 5.21322C4.59699 4.94498 5.15026 4.84221 5.72782 4.79503C6.27933 4.74997 6.95254 4.74998 7.75015 4.75Z" fill="#50E6FE" /><path d="M9.15835 15.94H9.71835C10.065 15.94 10.345 15.8633 10.5584 15.71C10.7717 15.5567 10.8784 15.2733 10.8784 14.86C10.8784 14.6533 10.8484 14.4833 10.7884 14.35C10.735 14.21 10.6584 14.1 10.5584 14.02C10.465 13.9333 10.3517 13.8733 10.2184 13.84C10.085 13.8067 9.93835 13.79 9.77835 13.79H9.15835V15.94ZM9.15835 12.79H9.56835C9.96835 12.79 10.2584 12.72 10.4384 12.58C10.625 12.4333 10.7184 12.19 10.7184 11.85C10.7184 11.51 10.635 11.27 10.4684 11.13C10.3017 10.99 10.0384 10.92 9.67835 10.92H9.15835V12.79ZM7.71835 9.86H10.1284C10.4217 9.86 10.6917 9.89 10.9384 9.95C11.1917 10.01 11.4084 10.11 11.5884 10.25C11.7684 10.39 11.9084 10.5767 12.0084 10.81C12.1084 11.0433 12.1584 11.33 12.1584 11.67C12.1584 12.0567 12.0684 12.39 11.8884 12.67C11.7084 12.9433 11.4384 13.13 11.0784 13.23V13.25C11.4784 13.3033 11.795 13.4733 12.0284 13.76C12.2617 14.0467 12.3784 14.43 12.3784 14.91C12.3784 15.19 12.3417 15.4567 12.2684 15.71C12.195 15.9633 12.0684 16.1867 11.8884 16.38C11.715 16.5667 11.485 16.7167 11.1984 16.83C10.9184 16.9433 10.5684 17 10.1484 17H7.71835V9.86Z" fill="#0D4274" /><path d="M16.405 14.31L15.715 11.1H15.695L15.005 14.31H16.405ZM16.595 9.86L18.485 17H16.985L16.655 15.49H14.755L14.425 17H12.925L14.815 9.86H16.595Z" fill="#0D4274" /><path d="M20.2916 14.77V14.98C20.2916 15.1467 20.305 15.3 20.3316 15.44C20.3583 15.5733 20.4083 15.6867 20.4816 15.78C20.555 15.8733 20.6516 15.9467 20.7716 16C20.8983 16.0533 21.055 16.08 21.2416 16.08C21.4616 16.08 21.6583 16.01 21.8316 15.87C22.0116 15.7233 22.1016 15.5 22.1016 15.2C22.1016 15.04 22.0783 14.9033 22.0316 14.79C21.9916 14.67 21.9216 14.5633 21.8216 14.47C21.7216 14.3767 21.5883 14.2933 21.4216 14.22C21.2616 14.14 21.0616 14.06 20.8216 13.98C20.5016 13.8733 20.225 13.7567 19.9916 13.63C19.7583 13.5033 19.5616 13.3567 19.4016 13.19C19.2483 13.0167 19.135 12.82 19.0616 12.6C18.9883 12.3733 18.9516 12.1133 18.9516 11.82C18.9516 11.1133 19.1483 10.5867 19.5416 10.24C19.935 9.89333 20.475 9.72 21.1616 9.72C21.4816 9.72 21.775 9.75667 22.0416 9.83C22.315 9.89667 22.5483 10.01 22.7416 10.17C22.9416 10.3233 23.095 10.5233 23.2016 10.77C23.315 11.01 23.3716 11.3 23.3716 11.64V11.84H21.9916C21.9916 11.5 21.9316 11.24 21.8116 11.06C21.6916 10.8733 21.4916 10.78 21.2116 10.78C21.0516 10.78 20.9183 10.8033 20.8116 10.85C20.705 10.8967 20.6183 10.96 20.5516 11.04C20.4916 11.1133 20.4483 11.2 20.4216 11.3C20.4016 11.4 20.3916 11.5033 20.3916 11.61C20.3916 11.83 20.4383 12.0167 20.5316 12.17C20.625 12.3167 20.825 12.4533 21.1316 12.58L22.2416 13.06C22.515 13.18 22.7383 13.3067 22.9116 13.44C23.085 13.5667 23.2216 13.7067 23.3216 13.86C23.4283 14.0067 23.5016 14.17 23.5416 14.35C23.5816 14.53 23.6016 14.73 23.6016 14.95C23.6016 15.7033 23.3816 16.2533 22.9416 16.6C22.5083 16.94 21.9016 17.11 21.1216 17.11C20.3083 17.11 19.725 16.9333 19.3716 16.58C19.025 16.2267 18.8516 15.72 18.8516 15.06V14.77H20.2916Z" fill="#0D4274" /><path d="M28.4572 9.86V11.04H25.9072V12.72H28.3072V13.9H25.9072V15.82H28.5572V17H24.4672V9.86H28.4572Z" fill="#0D4274" /><path d="M14.7703 24.8C14.7703 25 14.7803 25.1867 14.8003 25.36C14.8203 25.5333 14.857 25.6833 14.9103 25.81C14.9703 25.93 15.0503 26.0267 15.1503 26.1C15.257 26.1667 15.3936 26.2 15.5603 26.2C15.7336 26.2 15.8703 26.1667 15.9703 26.1C16.077 26.0267 16.157 25.9267 16.2103 25.8C16.2636 25.6733 16.297 25.5267 16.3103 25.36C16.3303 25.1867 16.3403 25 16.3403 24.8C16.3403 24.32 16.2803 23.9767 16.1603 23.77C16.0403 23.5633 15.8403 23.46 15.5603 23.46C15.2736 23.46 15.0703 23.5633 14.9503 23.77C14.8303 23.9767 14.7703 24.32 14.7703 24.8ZM16.2303 21.72C16.2303 21.44 16.1803 21.2267 16.0803 21.08C15.987 20.9333 15.8203 20.86 15.5803 20.86C15.3936 20.86 15.2403 20.9067 15.1203 21C15.007 21.0867 14.917 21.21 14.8503 21.37C14.7903 21.53 14.7503 21.72 14.7303 21.94C14.7103 22.16 14.7003 22.4 14.7003 22.66V23.01H14.7203C14.8403 22.8233 15.0103 22.6767 15.2303 22.57C15.457 22.4567 15.7303 22.4 16.0503 22.4C16.3636 22.4 16.6303 22.4567 16.8503 22.57C17.0703 22.6767 17.247 22.83 17.3803 23.03C17.5203 23.2233 17.6203 23.4567 17.6803 23.73C17.747 23.9967 17.7803 24.29 17.7803 24.61C17.7803 25.43 17.597 26.0533 17.2303 26.48C16.8703 26.9 16.2903 27.11 15.4903 27.11C14.997 27.11 14.6036 27.0233 14.3103 26.85C14.017 26.6767 13.7903 26.44 13.6303 26.14C13.477 25.8333 13.377 25.48 13.3303 25.08C13.2836 24.68 13.2603 24.2633 13.2603 23.83C13.2603 23.33 13.2736 22.8467 13.3003 22.38C13.3336 21.9067 13.4236 21.49 13.5703 21.13C13.7236 20.7633 13.9603 20.47 14.2803 20.25C14.6003 20.03 15.0536 19.92 15.6403 19.92C15.8936 19.92 16.137 19.95 16.3703 20.01C16.6103 20.07 16.8203 20.17 17.0003 20.31C17.1803 20.45 17.3236 20.6367 17.4303 20.87C17.5436 21.0967 17.6036 21.38 17.6103 21.72H16.2303Z" fill="#0D4274" /><path d="M18.215 24.35L20.565 19.92H22.055V24.41H22.735V25.53H22.055V27H20.735V25.53H18.215V24.35ZM20.735 21.72H20.715L19.335 24.41H20.735V21.72Z" fill="#0D4274" /></svg>;
const Memo = memo(Base64StringEncodeDecode);
export default Memo;