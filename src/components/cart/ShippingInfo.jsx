import Input from '../views/InputV2';
import { addressRules } from './formRules';
import Form from '../views/form/Form';

const ShippingInfo = () => {
    return (
        <div className='py-4'>
            <h1 className='text-title-large-18-600 mb-8'>Shipping Details</h1>
            <div className='grid grid-cols-2 gap-3'>
                <Form.Input element='input' label='Address' name='address' rules={addressRules} isRequired />
                <Form.Input element='input' label='City' name='city' isRequired />
                <Form.Input element='input' label='State' name='state' />
                <Form.Input element='input' label='Country' name='country' isRequired />
            </div>
        </div>
    );
};
export default ShippingInfo;
