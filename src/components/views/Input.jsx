import { twMerge } from 'tailwind-merge'

const Input = ({ type = 'text', onChange=()=>{}, defaultValue, placeholder, className }) => {
    return (
        <input
            className={twMerge(' w-full bg-[#F7F8FA] rounded-sm py-2 px-4 outline-none border border-[#001F2D]',className)}
            type={type}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
        />
    );
};
export default Input;
