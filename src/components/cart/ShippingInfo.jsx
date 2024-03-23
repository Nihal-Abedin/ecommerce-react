import Input from '../views/InputV2';
import { addressRules } from './formRules';

const ShippingInfo = () => {
    return (
        <div className='py-4'>
            <h1 className='text-title-large-18-600 mb-8'>Shipping Details</h1>
            <div className='grid grid-cols-2 gap-3'>
                <Input element='input' label='Address' name='address' rules={addressRules} required />
                <Input element='input' label='City' required />
                <Input element='input' label='State' />
                <Input element='input' label='Country' />
            </div>
        </div>
    );
};
export default ShippingInfo;
