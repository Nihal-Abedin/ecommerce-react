import React, { createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';
// @ts-ignore
import styles from './input.module.css';
type Element = 'input' | 'textarea';

interface InputElementType {
    input: React.InputHTMLAttributes<Element>;
    textarea: React.TextareaHTMLAttributes<Element>;
}

type PROPS = InputElementType[Element] & {
    element: Element;
    className?: string;
    children?: React.ReactNode;
    isLoading?: boolean;
    search?: boolean;
    type?: string;
    resize?: boolean;
    size?: 'small' | 'medium' | 'large';
};

const InputV2: React.FC<PROPS> = ({
    element = 'input',
    className = '',
    search = false,
    resize = true,
    size = 'medium',
    ...restProps
}) => {
    return (
        <div
            className={twMerge(
                ` w-full bg-[#F7F8FA] rounded-lg   border border-darkfox-gray-border flex items-center overflow-hidden `,
                className
            )}>
            {createElement(element, {
                className: `!outline-none text-title-small-15-600  border-none w-full  py-2 px-4 ${
                    resize ? 'resize' : 'resize-none'
                } ${styles[size]}`,
                ...restProps,
            })}
            {search && element !== 'textarea' ? (
                <Button element='button' className='py-2 px-4 text-paragraph bg-darkfox-gray-border rounded-none'>
                    <i className='fas fa-search' />
                </Button>
            ) : null}
        </div>
    );
};

export default InputV2;
