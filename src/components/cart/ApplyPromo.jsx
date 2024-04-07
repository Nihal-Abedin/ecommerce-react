import Input from '../views/InputV2';
import Button from '../views/Button';
import { nameRules } from './formRules';
const ApplyPromo = () => {
    return (
        <div className='mt-10 flex flex-col gap-5'>
            <h1 className='text-title-large-20-600'>Apply promo code</h1>
            <div className='flex gap-3 items-start'>
                <Input element='input' type='text' placeholder='Promo code' name='promo_code' rules={nameRules}/>
                <Button element='button' type='button' varient='primary'>Apply</Button>
            </div>
        </div>
    );
};

export default ApplyPromo;
