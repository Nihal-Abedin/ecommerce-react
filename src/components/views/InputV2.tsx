import React, { createElement, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from './Button';
import { FaSearch } from 'react-icons/fa';

// @ts-ignore
import styles from './input.module.css';
export type InputElement = 'input' | 'textarea';

interface InputElementType {
    input: React.InputHTMLAttributes<InputElement>;
    textarea: React.TextareaHTMLAttributes<InputElement>;
}

// Define specific props for number inputs
interface NumberInputProps {
    type: 'number';
    min: number;
    max: number;
}

export type InputProps = InputElementType[InputElement] &
    ({ element: InputElement } | NumberInputProps) & {
        element: InputElement;
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
        runValidatiors?: boolean;
        isRequired?: boolean;
        isValid: React.Dispatch<React.SetStateAction<boolean>>;
    };

const InputV2: React.FC<InputProps> = ({
    element = 'input',
    className = '',
    search = false,
    resize = true,
    size = 'medium',
    label = '',
    rules = [],
    showValidationMessages = true,
    runValidatiors = false,
    isRequired = false,
    required = false,
    isValid = () => null,
    ...restProps
}) => {
    const [validationMessages, setValidationMessage] = useState<string[] | undefined>();
    const [inputValue, setInputVal] = useState<string | number>('');
    useEffect(() => {
        if (runValidatiors) {
            checkValidatiors(inputValue);
        }
    }, [runValidatiors, inputValue]);
    const checkValidatiors = (val: string | number) => {
        let msgs: string[] = [];
        let isValid = false;
        [
            {
                validate: function (val: string | number) {
                    if (!required && !isRequired) return true;
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
            ...rules,
        ]?.forEach((rule) => {
            if (!rule.validate(val)) {
                isValid = false;
                msgs.push(`${label || restProps.name} ${rule.msg()}`);
            } else {
                isValid = true;
            }
        });
        setValidationMessage(msgs);
        return isValid;
    };
    const handleValidation = (e: React.FormEvent<HTMLInputElement>) => {
        let val = e.currentTarget.value;
        const { max, min } = restProps as NumberInputProps;

        if (restProps.type === 'number') {
            let newVal = parseFloat(val);

            // Clamp value within the specified range
            if (typeof min === 'number' && newVal < min) {
                e.currentTarget.value = min.toString();
            }
            if (typeof max === 'number' && newVal > max) {
                e.currentTarget.value = max.toString();
            }
        }
        setInputVal(val);
        const valid = checkValidatiors(val);
        isValid?.(valid);
        restProps.onChange?.(e);
    };
    return (
        <div className={`${className} `}>
            {label ? (
                <p className='text-sub-title-large-15-600 mb-3 relative'>
                    {label}
                    {required || isRequired ? <span className='text-error absolute -top-1 pl-1'>*</span> : null}
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
                    required,
                    ...restProps,
                    onChange: handleValidation,
                })}
                {search && element !== 'textarea' ? (
                    <Button element='button' className='py-2 px-4 text-paragraph bg-darkfox-gray-border rounded-none'>
                        <FaSearch size={20} />
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
