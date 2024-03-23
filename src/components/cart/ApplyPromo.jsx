import Input from '../views/InputV2';
import Button from '../views/Button';
const ApplyPromo = () => {
    return (
        <div className='mt-10 flex flex-col gap-5'>
            <h1 className='text-title-large-20-600'>Apply promo code</h1>
            <div className='flex gap-3 items-center'>
                <Input element='input' type='text' placeholder='Promo code' />
                <Button element='button' type='button' varient='primary'>Apply</Button>
            </div>
        </div>
    );
};

export default ApplyPromo;
