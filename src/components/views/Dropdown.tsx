import { SlArrowDown } from 'react-icons/sl';
import { IconType } from 'react-icons';
import Button from './Button';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectProps = {
    title: string;
    options: [{ label: string; icon?: IconType }];
    children?: React.ReactNode;
    className?: string;
};

const Dropdown: React.FC<SelectProps> = ({ title, options, className = '' }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);

    return (
        //  relative -bg--color-grey-200 rounded-md min-w-36
        <div className={twMerge('relative -bg--color-grey-200 rounded-md min-w-36', className)}>
            <Button
                onClick={() => setShowOptions((prev) => !prev)}
                element='button'
                className='w-full flex items-center justify-between gap-2 '>
                {title} <SlArrowDown className={` transition-all ${showOptions ? 'rotate-180' : ''}`} />
            </Button>
            <div
                className={twMerge(
                    `max-h-36 overflow-y-auto  rounded-md absolute -bg--color-grey-100 w-full divide-y-2 ${
                        showOptions ? 'block' : 'hidden'
                    }`,
                    className
                )}>
                {options.map((op) => (
                    <p className='p-3 flex items-center gap-3 '>
                        {op.icon ? <op.icon /> : null}
                        {op.label}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;
