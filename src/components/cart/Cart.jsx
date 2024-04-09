import CartList from './CartList';
import CartSummery from './CartSummery';
import ContactInfo from './ContactInfo';
import ShippingInfo from './ShippingInfo';
import Form from '../views/form/Form';
import { useAuthStore } from '../../store/auth';
import { useCartList } from '../../queryHooks/queries/cart';
import { useGetRandomCartId } from '../../utils/hooks/useGetRandomCardId';
const Cart = () => {
    const [{ user_id }] = useAuthStore((state) => [state.user()]);
    const cartId = useGetRandomCartId();
    const { data, isLoading } = useCartList(cartId, user_id);
    console.log(data);
    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <Form
                    onSubmit={(data) => {
                        console.log('PRoceed', data);
                    }}
                    className='grid grid-cols-[2fr,1fr] '>
                    <div>
                        <CartList carts = {data.data} />
                        {data.data.length >= 1 ? (
                            <>
                                <ContactInfo />
                                <ShippingInfo />
                            </>
                        ) : null}
                    </div>

                    <CartSummery />
                </Form>
            )}
        </>
    );
};

export default Cart;
