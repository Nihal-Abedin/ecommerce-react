import Input from '../views/Input';
import Dropdown from '../views/Dropdown';
import Button from '../views/Button';
import { SlBasket } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';
import { queryClient } from '../../App';
import { PRODUCT_KEYS } from '../../queryHooks/queryKeys';
import { useParams } from 'react-router-dom';
import Specifications from './subDetails/Specifications';

const ProductDetailsView = () => {
    const { slug } = useParams();

    const prod = queryClient.getQueryData(PRODUCT_KEYS.list(slug)).data;

    const sizeOptions = prod.size.map((size) => ({ label: size.name, ...size }));
    return (
        <div className='md:grid  gap-4  '>
            <main className=' hidden md:flex flex-col gap-6 border-b-2 border-gray-300'>
                <h1 className='text-4xl'>{prod.title}</h1>
                <p>{prod.rating}/5</p>
                <div className='flex gap-2 font-medium'>
                    <p className='line-through 	text-gray-500'>${prod.price}</p>
                    <p>${prod.old_price}</p>
                </div>
                <section className='text-gray-500'>{prod.description}</section>
                <Specifications/>
            </main>
            <div className='flex flex-col justify-between'>
                <section className='grid grid-cols-2 gap-6 text-xs w-fit'>
                    <Input placeholder='Quantity' type='number' className='rounded' min={0} />
                    <div className=' w-fit'>
                        <Dropdown title='Size' options={sizeOptions} className='border border-black' />
                    </div>
                </section>
                <section className='flex gap-2 text-xs w-fit '>
                    {prod.color.map(cl=><button key={cl.color_code} style={{backgroundColor:`${cl.color_code}`}} onClick={()=>console.log(cl.color_code)} className='w-7 h-7 shadow-sm rounded-lg cursor-pointer'/>)}
                </section>
                <footer className='flex gap-4 justify-start'>
                    <Button element='button' type='button' varient='primary' className='flex gap-3 items-center'>
                        <SlBasket className='text-2xl' />
                        Add to Cart
                    </Button>
                    <Button element='button' type='button' varient='danger'>
                        <FaHeart className='text-white' />
                    </Button>
                </footer>
            </div>
        </div>
    );
};

export default ProductDetailsView;
