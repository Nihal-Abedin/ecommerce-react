import { twMerge } from 'tailwind-merge';
import Button from "./Button"
const Input = ({
    type = 'text',
    onChange = () => {},
    defaultValue,
    placeholder,
    className,
    search = false,
    ...restProps
}) => {
    return (
        <div
            className={twMerge(
                ' w-full bg-[#F7F8FA] rounded-sm border border-[#001F2D] flex items-center overflow-hidden',
                className
            )}>
            <div className=' w-full py-2 px-4'>
                <input
                    className='outline-none border-none w-full'
                    type={type}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e)}
                    {...restProps}
                />
            </div>
            {search ? (
                <Button element='button' className='py-2 px-4 -bg--color-grey-200 rounded-none'>
                    <i class='fas fa-search'/>
                </Button>
            ) : null}
        </div>
    );
};
export default Input;
