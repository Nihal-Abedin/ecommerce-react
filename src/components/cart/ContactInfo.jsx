import Input from '../views/InputV2';
import { emailRules, nameRules, phoneRules } from './formRules';


const ContactInfo = () => {
    return (
        <div className='py-4'>
            <h1 className='text-title-large-18-600 mb-8'>Contact Information</h1>
            <div className='grid grid-cols-2 gap-3'>
                <div className='col-[1/3]'>
                    <Input element='input' label='Full name' rules={nameRules} required/>
                </div>
                <Input element='input' label='Email' type='email' rules={emailRules} required/>
                <Input element='input' label='Mobile' rules={phoneRules} required/>
            </div>
        </div>
    );
};
export default ContactInfo;
