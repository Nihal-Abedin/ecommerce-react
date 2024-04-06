import React, { createElement, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';
import { FaSearch } from 'react-icons/fa';

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
    label?: string;
    rules?: {
        validate: (val: string | number) => boolean;
        msg: () => string;
        required?: boolean;
    }[];
    showValidationMessages?: boolean;
    onChange?: (val: React.FormEvent<HTMLInputElement>) => void;
};

const InputV2: React.FC<PROPS> = ({
    element = 'input',
    className = '',
    search = false,
    resize = true,
    size = 'medium',
    label = '',
    rules = [],
    showValidationMessages = true,
    ...restProps
}) => {
    const [validationMessages, setValidationMessage] = useState<string[] | undefined>();
    useEffect(() => {
        rules = [
            ...rules,
            {
                validate: function (val: string | number) {
                    if (!restProps.required) return true;
                    if (!val) {
                        return false;
                    } else {
                        return true;
                    }
                },
                msg: function () {
                    return `is required!`;
                },
            },
        ];
    }, [validationMessages]);
    const handleValidation = (e: React.FormEvent<HTMLInputElement>) => {
        let msgs: string[] = [];
        const val = e.currentTarget.value;
        rules?.forEach((rule) => {
            if (!rule.validate(e.currentTarget.value)) {
                msgs.push(`${label} ${rule.msg()}`);
            }
        });
        setValidationMessage(msgs);
        restProps.onChange?.(e);
        return val;
    };
    return (
        <div className={`${className} `}>
            {label ? (
                <p className='text-sub-title-large-15-600 mb-3 relative'>
                    {label}
                    {restProps.required ? <span className='text-error absolute -top-1 pl-1'>*</span> : null}
                </p>
            ) : null}
            <div
                className={twMerge(
                    ` w-full bg-[#F7F8FA] rounded-lg   border border-darkfox-gray-border flex items-center overflow-hidden `,
                    `${validationMessages && validationMessages.length > 0 ? 'border border-error' : ''}`
                )}>
                {createElement(element, {
                    className: `!outline-none text-title-small-15-600  border-none w-full  py-2 px-4 ${
                        resize ? 'resize' : 'resize-none'
                    } ${styles[size]}`,
                    ...restProps,
                    onChange: handleValidation,
                })}
                {search && element !== 'textarea' ? (
                    <Button element='button' className='py-2 px-4 text-paragraph bg-darkfox-gray-border rounded-none'>
                        <FaSearch />
                    </Button>
                ) : null}
            </div>
            {showValidationMessages
                ? validationMessages?.map((msg) => (
                      <p key={msg} className='text-error text-sub-title-small-13-600 pl-2'>
                          {msg}
                      </p>
                  ))
                : null}
        </div>
    );
};

export default InputV2;
