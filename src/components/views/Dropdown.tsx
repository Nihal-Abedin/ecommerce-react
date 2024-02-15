import { SlArrowDown } from 'react-icons/sl';
import { IconType } from 'react-icons';
import Button from './Button';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import ClickOutside from '../helpers/ClickOutside';

export type SelectProps = {
    title: string;
    options: [{ label: string; icon?: IconType }];
    children?: React.ReactNode;
    className?: string;
    select?: boolean;
};
const Dropdown: React.FC<SelectProps> = ({ title, options, className = '', select = true }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<any>();
    return (
        <div className={twMerge('relative -bg--color-grey-200 rounded-md min-w-36 ', className)}>
            <ClickOutside onClick={() => setShowOptions(false)}>
                <Button
                    onClick={() => setShowOptions((prev) => !prev)}
                    element='button'
                    varient='primary'
                    className='w-full flex items-center justify-between gap-2'>
                    {select && selectedOption ? selectedOption.label : title}{' '}
                    <SlArrowDown className={` transition-all ${showOptions ? 'rotate-180' : ''}`} />
                </Button>
                <div
                    className={`max-h-36 overflow-y-auto  rounded-md absolute -bg--color-grey-100 w-full divide-y-2 transition-all -shadow--shadow-lg ${
                        showOptions ? 'opacity-100 visible translate-y-100 ' : 'opacity-0 invisible -translate-y-1'
                    }`}>
                    {options.map((op) => (
                        <p
                            key={op.label}
                            onClick={() => setSelectedOption(op)}
                            className='p-3 flex items-center gap-3 cursor-pointer hover:-bg--color-grey-200 transition-colors'>
                            {op.icon ? <op.icon /> : null}
                            {op.label}
                        </p>
                    ))}
                </div>
            </ClickOutside>
        </div>
    );
};

export default Dropdown;
