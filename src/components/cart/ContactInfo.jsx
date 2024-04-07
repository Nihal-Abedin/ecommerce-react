import Input from '../views/InputV2';
import { emailRules, nameRules, phoneRules } from './formRules';
import Form from "../views/form/Form"

const ContactInfo = () => {
    return (
        <div className='py-4'>
            <h1 className='text-title-large-18-600 mb-8'>Contact Information</h1>
            <div className='grid grid-cols-2 gap-3'>
                <div className='col-[1/3]'>
                    <Form.Input element='input' label='Full name' rules={nameRules} name='fullName' isRequired />
                </div>
                <Form.Input element='input' label='Email' type='email' name='email' rules={emailRules} isRequired/>
                <Form.Input element='input' label='Mobile' name='mobile' rules={phoneRules} isRequired/>
            </div>
        </div>
    );
};
export default ContactInfo;
