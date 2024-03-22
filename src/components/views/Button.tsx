// @ts-ignore

import styles from './button.module.css';
import React, { createElement } from 'react';
import { twMerge } from 'tailwind-merge';

type Element = 'button' | 'a';

interface ButtonElementType {
    button: React.ButtonHTMLAttributes<Element>;
    a: React.AnchorHTMLAttributes<Element>;
}

type PROPS = ButtonElementType[Element] & {
    element: 'button' | 'a';
    className?: string;
    children?: React.ReactNode;
    varient?: 'primary' | 'ghost' | 'danger';
    isLoading?: boolean;
    size?:'small'|'medium'|'large'

};

const Button: React.FC<PROPS> = ({ element= "button", className = '', children, varient = 'primary',size='medium', ...restProps }) => {
    // const type = element === "button"?'button':'media_type';
    return createElement(
        element,
        { className: twMerge(`${styles[varient]} ${styles[size]} ${styles.button} `, className), ...restProps },
        children
    );
};
export default Button;
