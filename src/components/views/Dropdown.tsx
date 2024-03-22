import { SlArrowDown } from 'react-icons/sl';
import { IoClose } from 'react-icons/io5';
import { IconType } from 'react-icons';
import Button from './Button';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
// @ts-ignore
import ClickOutside from '../helpers/ClickOutside';
import { useNavigate } from 'react-router-dom';
export type SelectProps = {
    title: string;
    options: [{ label: string; icon?: IconType }];
    children?: React.ReactNode;
    className?: string;
    select?: boolean;
    links?: boolean;
    onSelect?: (op: { label: string; icon?: IconType } | {}) => void;
    onClear?: () => void;
    size?: 'small' | 'medium' | 'large';
};
const Dropdown: React.FC<SelectProps> = ({
    title,
    options,
    className = '',
    select = true,
    links = false,
    onSelect = () => null,
    onClear = () => null,
    size = 'medium',
}) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<any>();
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            !select && setSelectedOption(null);
        };
    }, [showOptions]);

    useEffect(() => {}, [selectedOption]);

    const handleClear = () => {
        setSelectedOption(null);
        onClear();
    };
    const handleSelect = (op: any) => {
        if (!links) {
            setSelectedOption(op);
            const { label: _, ...rest } = op;
            onSelect(rest);
            setShowOptions(false);
        } else {
            navigate(op.label);
        }
    };
    return (
        <div className={twMerge('relative bg-white border border-darkfox-gray-border rounded-lg min-w-36 text-sub-title-medium-14-500 ', className)}>
            <ClickOutside onClick={() => setShowOptions(false)}>
                <Button
                    size={size}
                    onClick={() => setShowOptions((prev) => !prev)}
                    element='button'
                    varient='primary'
                    className='w-full flex items-center justify-between gap-2 text-darkfox-semidark-gray'>
                    <p className='text-title-small-15-600'>{select && selectedOption ? selectedOption.label : title}</p>
                    {!selectedOption ? (
                        <SlArrowDown className={` text-title-small-15-600 transition-all ${showOptions ? 'rotate-180' : ''}`} />
                    ) : (
                        <IoClose onClick={handleClear} className='text-title-small-15-600 hover:text-error' />
                    )}
                </Button>
                <div
                    className={`max-h-36 overflow-y-auto border border-darkfox-purple-light  rounded-md absolute bg-white w-full divide-y-2 transition-all shadow-xl ${
                        showOptions ? 'opacity-100 visible translate-y-[5%] ' : 'opacity-0 invisible -translate-y-1'
                    }`}>
                    {options.map((op) => (
                        <p
                            key={op.label}
                            onClick={() => handleSelect(op)}
                            className='p-3 flex items-center gap-3 cursor-pointer hover:bg-primary-button-10 hover:text-primary text-sub-title-medium-14-600 text-darkfox-semidark-gray transition-colors'>
                            {op.icon ? <op.icon className='text-xl' /> : null}
                            {op.label}
                        </p>
                    ))}
                </div>
            </ClickOutside>
        </div>
    );
};

export default Dropdown;
