import { useCartDetail } from '../../queryHooks/queries/cart';
import Button from '../views/Button';
import Input from '../views/InputV2';
import ApplyPromo from './ApplyPromo';
const CartSummery = ({ cartId, userId }) => {
    const { data, isLoading } = useCartDetail(cartId, userId);
    const cartDetails = !isLoading && data.data
    console.log(isLoading, '-------------------->', data, cartId,userId);
    return (
        <div className='flex flex-col  w-full p-11'>
            <h1 className='text-title-large-20-600 mb-3 text-left'>Cart Summery</h1>
            <div className='flex flex-col w-full items-center'>
                <div className='flex flex-col w-full py-3 gap-3 text-title-small-15-600 text-paragraph border-b-2 border-darkfox-gray-border'>
                    <p className='flex justify-between'>
                        Sub total <span>${cartDetails.sub_total}</span>
                    </p>
                    <p className='flex justify-between'>
                        Shipping <span>${cartDetails.shipping}</span>
                    </p>
                    <p className='flex justify-between'>
                        Tax fee <span>${cartDetails.tax}</span>
                    </p>
                    <p className='flex justify-between'>
                        Service fee <span>${cartDetails.service_fee}</span>
                    </p>
                </div>
                <p className='flex justify-between w-full text-sub-title-large-15-600 py-2'>
                    The total amount (including vat) <span>${cartDetails.total}</span>
                </p>
            </div>
            <Button element='button' type='submit' varient='primary' className='mt-16'>
                Proceed to checkout
            </Button>
            <ApplyPromo />
        </div>
    );
};
export default CartSummery;
