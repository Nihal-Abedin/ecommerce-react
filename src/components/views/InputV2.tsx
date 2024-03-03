import React, { createElement } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';

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
};

const InputV2: React.FC<PROPS> = ({
    element = 'input',
    className = '',
    search = false,
    resize = true,
    ...restProps
}) => {
    return (
        <div
            className={twMerge(
                ' w-full bg-[#F7F8FA] rounded-sm border border-[#001F2D] flex items-center overflow-hidden',
                className
            )}>
            {createElement(element, {
                className: `outline-none border-none w-full  py-2 px-4 ${resize ? 'resize' : 'resize-none'}`,
                ...restProps,
            })}
            {search && element !== 'textarea' ? (
                <Button element='button' className='py-2 px-4 -bg--color-grey-200 rounded-none'>
                    <i className='fas fa-search' />
                </Button>
            ) : null}
        </div>
    );
};

export default InputV2;
