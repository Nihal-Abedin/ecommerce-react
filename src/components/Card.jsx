import { IoMdAdd, IoMdClose } from 'react-icons/io';
import Button from '../components/views/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductSelection from './productDetails/ProductSelection';
import ClickOutside from './helpers/ClickOutside';

const Card = ({ product }) => {
    const [showCartOptions, setshowOptions] = useState(false);

    return (
        <div className='relative w-[22rem] h-[25rem] bg-purple-white overflow-hidden rounded drop-shadow-md'>
            <main className='h-[60%]'>
                <Link to={`/detail/${product.slug}`}>
                    {' '}
                    <img src={product.image} className='h-full w-full object-cover' />
                </Link>
            </main>
            <section className=' h-[40%] text-left p-3 flex flex-col'>
                <Link to={`/detail/${product.slug}`} className='text-title-medium-16-600'>
                    {product.title}
                </Link>
                <p className='text-gray-600 text-sub-title-small-13-600'>{product.category.title}</p>
                <p className='text-gray-600 text-sub-title-small-13-600'>{product.description}</p>
                <div className='flex items-center justify-between mt-7'>
                    <div className='flex items-center gap-4'>
                        <p>${product.price}</p>
                        <p className='line-through	text-gray-500'>${product.old_price}</p>
                    </div>
                    <Button className='text-2xl p-0 text-paragraph' onClick={() => setshowOptions((prev) => !prev)}>
                        <IoMdAdd />
                    </Button>
                </div>
            </section>
            <div
                className={`cursor-pointer z-[3]  absolute bg-darkfox-dark bg-opacity-45 left-0 top-0 transition-all backdrop-blur-md	 w-full h-full ${
                    showCartOptions ? 'opacity-100' : 'opacity-0 hidden'
                }`}
            />
            <ClickOutside onClick={() => setshowOptions(false)}>
                <div
                    className={`overlay z-10 absolute transition-all ${
                        showCartOptions ? '-translate-x-0' : 'translate-x-full'
                    } top-0 right-0 bg-purple-white bg-opacity-85 w-[70%] h-full flex items-center p-5`}>
                    <IoMdClose
                        className='absolute top-2 right-2 text-2xl text-black cursor-pointer'
                        onClick={() => setshowOptions((prev) => !prev)}
                    />
                    <ProductSelection prod={product} compact />
                </div>
            </ClickOutside>
        </div>
    );
};

export default Card;
