import {ElementType, forwardRef, JSX, RefObject} from 'react';
import {XtifyIcons} from "../types";
import {ICON_PREFIX} from "../constants";
import PropTypes from "prop-types";

export const XtifyIcon: ElementType = function ({name, children, ...props}: { name: XtifyIcons, children: JSX.Element }) {
//    const ComponentProptypes = {
//        color: PropTypes.string,
//        size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//        stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//    };
//    const Component = forwardRef(
//        ({color, size, stroke}: typeof ComponentProptypes, ref: RefObject<any>) => {
//            return <svg
//                ref={ref}
//                xmlns="http://www.w3.org/2000/svg"
//                width={size}
//                height={size}
//                strokeWidth={stroke}
//                color={color}
//            >
//                {children}
//            </svg>;
//        }
//    );
//    Component.displayName = `${ICON_PREFIX}${name}`;
//    Component.propTypes = ComponentProptypes;
    return /*Component*/;
};


