import Input from '../views/InputV2';
import Dropdown from '../views/Dropdown';
import Button from '../views/Button';
import { SlBasket } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';
import { queryClient } from '../../App';
import { PRODUCT_KEYS } from '../../queryHooks/queryKeys';
import { useParams } from 'react-router-dom';
import Specifications from './subDetails/Specifications';
import { useEffect, useState } from 'react';
import { useGetCountry } from '../../utils/hooks/useGetCountry';
import { useAuthStore } from '../../store/auth';
import { useGetRandomCartId } from '../../utils/hooks/useGetRandomCardId';
import { useAddToCart } from '../../queryHooks/mutations/product';
import { useToast } from '../../utils/hooks/UseToast';

const minQty = 1;
const ProductSelection = ({ prod, compact = false }) => {
    const country = useGetCountry();
    const cartId = useGetRandomCartId();
    const sizeOptions = prod.size.map((size) => ({ label: size.name, ...size }));
    const user = useAuthStore((state) => state.user());
    const { mutate } = useAddToCart();
    const toast = useToast();

    const [selectedProduct, setSelectedProduct] = useState({
        product_id: prod.id,
        price: prod.old_price,
        user_id: user.user_id,
        shipping_amount: prod.shipping_amount,
        qty: minQty,
    });
    const [selectedSize, setSelectedSize] = useState();

    const handleAddToCart = async () => {
        if ((prod.color.length > 0 && !selectedProduct.color) || (sizeOptions.length > 0 && !selectedSize?.size)) {
            toast.fire({
                icon: 'info',
                title: 'Please select size and color',
            });
            return;
        }
        mutate(
            { ...selectedProduct, ...selectedSize, cart_id: cartId },
            {
                onSuccess: (data) => {
                    console.log(data);
                    toast.fire({
                        icon: 'success',
                        title: data.data.message,
                    });
                },
                onError: (err) => {
                    console.log(err);
                },
            }
        );
    };
    useEffect(() => {
        setSelectedProduct((prev) => ({ ...prev, country }));
    }, [country]);
    return (
        <div className={`flex flex-col h-full  self-end ${compact ? 'justify-center gap-2' : ' justify-evenly'}`}>
            <section className={`flex flex-col gap-3 w-fit`}>
                <Input
                    element='input'
                    type='number'
                    placeholder='Quantity'
                    min={minQty}
                    size='small'
                    defaultValue={minQty}
                    onChange={(e) => {
                        setSelectedProduct((prev) => ({ ...prev, qty: +e.target.value }));
                    }}
                />
                {sizeOptions.length > 0 && (
                    <div className=' w-fit'>
                        <Dropdown
                            title='Size'
                            options={sizeOptions}
                            onSelect={(op) => setSelectedSize({ size: op.name })}
                            onClear={() => setSelectedSize({})}
                        />
                    </div>
                )}
            </section>
            {prod.color.length > 0 && (
                <section className='flex gap-2 text-xs w-fit '>
                    {prod.color.map((cl) => (
                        <button
                            key={cl.color_code}
                            style={{ backgroundColor: `${cl.color_code}`, outlineColor: `${cl.color_code}` }}
                            onClick={() => setSelectedProduct((prev) => ({ ...prev, color: cl.color_code }))}
                            className={`w-7 h-7 shadow-sm rounded-lg cursor-pointer ${
                                cl.color_code === selectedProduct.color ? 'outline outline-2 outline-offset-2' : ''
                            }`}
                        />
                    ))}
                </section>
            )}
            <footer className='flex gap-4 justify-start'>
                <Button
                    onClick={handleAddToCart}
                    element='button'
                    type='button'
                    varient='primary'
                    className='flex gap-3 items-center'>
                    <SlBasket className='text-2xl' />
                    Add to Cart
                </Button>
                <Button element='button' type='button' varient='danger'>
                    <FaHeart className='text-white' />
                </Button>
            </footer>
        </div>
    );
};
export default ProductSelection;
