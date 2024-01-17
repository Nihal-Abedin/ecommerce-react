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
};

const Button: React.FC<PROPS> = ({ element, className = '', children, varient = 'primary', ...restProps }) => {
    return createElement(
        element,
        { className: twMerge(`${styles[varient]} ${styles.button} `, className), ...restProps },
        children
    );
};
export default Button;
