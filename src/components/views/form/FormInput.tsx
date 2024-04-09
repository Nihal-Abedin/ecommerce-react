import { useContext, useEffect, useState } from 'react';
import InputV2, { InputProps, InputElement } from '../InputV2';
import { FormContext } from './Form';

type FormInputProps = {
    isRequired?: boolean;
};
const FormInput: React.FC<InputProps & FormInputProps> = ({
    element = 'input',
    isRequired = false,
    name = '',
    ...restProps
}) => {
    const { runValidators, setformValues } = useContext(FormContext);
    const [isValid, setIsvalid] = useState(false);
    const [inputVal, setInputVal] = useState('');
    const handleChange = (e: React.ChangeEvent<InputElement> | React.FormEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        const name = (e.target as HTMLInputElement).name;
        setInputVal(value)
        setformValues?.((val) => ({ ...val, [name]: { value, isRequired, isValid } }));
    };
    useEffect(() => {
        setformValues?.((val) => ({ ...val, [name]: {  value: inputVal, isRequired, isValid } }));
    }, [inputVal]);
    return (
        <InputV2
            element={element}
            onChange={handleChange}
            runValidatiors={runValidators}
            {...restProps}
            name={name}
            isRequired={isRequired}
            isValid={setIsvalid}
        />
    );
};
export default FormInput;
