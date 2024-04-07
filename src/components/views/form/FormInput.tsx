import { useContext, useEffect } from 'react';
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
    const handleChange = (e: React.ChangeEvent<InputElement> | React.FormEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        const name = (e.target as HTMLInputElement).name;
        setformValues?.((val) => ({ ...val, [name]: { value, isRequired } }));
    };
    useEffect(() => {
        setformValues?.((val) => ({ ...val, [name]: { value: '', isRequired } }));
    }, []);
    return (
        <InputV2
            element={element}
            onChange={handleChange}
            runValidatiors={runValidators}
            {...restProps}
            name={name}
            isRequired={isRequired}
        />
    );
};
export default FormInput;
