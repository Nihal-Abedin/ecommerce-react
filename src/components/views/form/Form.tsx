import FormInput from './FormInput';
import { InputProps } from '../InputV2';
import { createContext, createElement, ReactNode, useState } from 'react';
// @ts-ignore
import { useToast } from '../../../utils/hooks/UseToast.jsx';

type Element = 'form';
interface Template {
    Input: React.FC<Omit<InputProps, 'required'>>;
}
interface FormElementType {
    form: React.FormHTMLAttributes<Element>;
}

interface FormValues {
    [key: string]: {
        isRequired: boolean;
        value: string | number;
        isValid: boolean;
    };
}
interface SubmitValuesTypes {
    [key: string]: string | number;
}
type Props = FormElementType[Element] & {
    children: ReactNode;
    onSubmit: (data: SubmitValuesTypes) => void;
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
export const FormContext = createContext<InitialvalueType>(Initialvalue);
const Form: React.FC<Props> & Template = ({ children, ...restProps }) => {
    const toast = useToast();
    const [runValidators, setRunValidators] = useState(false);
    const [formValues, setformValues] = useState<FormValues>({});
    console.log(formValues);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let valid = false;
        let formatedData = {};
        for (const d in formValues) {
            if (formValues?.[d].isRequired && !formValues[d].isValid) {
                setRunValidators(true);
                toast.fire({
                    icon: 'error',
                    title: 'Please fill up the required fileds (*).',
                });
                return;
            } else {
                formatedData = { ...formatedData, [d]: formValues?.[d].value };
                valid = true;
                setRunValidators(false);
            }
        }
        if (valid) {
            restProps?.onSubmit(formatedData);
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
