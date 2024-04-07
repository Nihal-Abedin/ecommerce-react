import FormInput from './FormInput';
import { InputProps } from '../InputV2';
import { createContext, createElement, ReactNode, useState } from 'react';

type Element = 'form';
interface Template {
    Input: React.FC<Omit<InputProps, 'required'>>;
}
interface FormElementType {
    form: React.FormHTMLAttributes<Element>;
}
type Props = FormElementType[Element] & {
    children: ReactNode;
    onSubmit: (data: any) => void;
};
type InitialvalueType = {
    runValidators?: boolean;
    setIsFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
    setformValues?: React.Dispatch<React.SetStateAction<{}>>;
};
let Initialvalue = {
    runValidators: false,
    setformValues: () => null,
};
interface FormValues {
    [key: string]: {
        isRequired: boolean;
        value: string | number;
    };
}
export const FormContext = createContext<InitialvalueType>(Initialvalue);
const Form: React.FC<Props> & Template = ({ children, ...restProps }) => {
    const [runValidators, setRunValidators] = useState(false);
    const [formValues, setformValues] = useState<FormValues>({});
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = false;
        for (const d in formValues) {
            // Object.prototype.hasOwnProperty.call(formValues, key)
            if (formValues?.[d].isRequired && !formValues?.[d].value) {
                setRunValidators(true);
                return;
            } else {
                valid = true;
                setRunValidators(false);
            }
        }
        if (valid) {
            restProps?.onSubmit(formValues);
        }
    };
    return (
        <FormContext.Provider value={{ runValidators, setformValues }}>
            {createElement(
                'form',
                {
                    className: restProps.className,
                    ...restProps,
                    onSubmit: handleSubmit,
                },
                children
            )}
        </FormContext.Provider>
    );
};
Form.Input = FormInput;
export default Form;
