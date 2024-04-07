import CartList from './CartList';
import CartSummery from './CartSummery';
import ContactInfo from './ContactInfo';
import ShippingInfo from './ShippingInfo';
import Form from '../views/form/Form';
const Cart = () => {
    // return (
    //     <form onSubmit={(e)=>{
    //         e.preventDefault();
    //         console.log("PRoceed")
    //         console.log(e)
    //     }} className='grid grid-cols-[2fr,1fr] '>
    //         <div>
    //             <CartList />
    //             <ContactInfo/>
    //             <ShippingInfo/>
    //         </div>
    //         <CartSummery />
    //     </form>
    // );

    return (
        <Form
            onSubmit={(data) => {
                console.log('PRoceed', data);
              
            }} className='grid grid-cols-[2fr,1fr] '>
            <div>
                <CartList />
                <ContactInfo />
                <ShippingInfo />
            </div>
            <CartSummery />
        </Form>
    );
};

export default Cart;
