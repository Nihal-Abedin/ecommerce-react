import { IoMdAdd, IoMdClose } from 'react-icons/io';
import Button from '../components/views/Button';
import Dropdown from '../components/views/Dropdown';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const sizeOptions = [
    {
        label: 'Xl',
    },
    {
        label: 'Xl',
    },
    {
        label: 'Xl',
    },
];
const Card = ({ product }) => {
    const [showCartOptions, setshowOptions] = useState(false);
    const navigate = useNavigate();
    return (
        <div className='relative w-[22rem] h-[25rem] overflow-hidden rounded drop-shadow-md'>
            <main className='h-[60%]'>
                <img src={product.image} className='h-full w-full object-cover' />
            </main>
            <section className='-text--color-grey-900 -bg--color-grey-200 h-[40%] text-left p-3 flex flex-col'>
                <h1 className='text-2xl font-semibold'>{product.title}</h1>
                <p className='text-gray-600'>{product.category.title}</p>
                <p className='text-gray-600'>{product.description}</p>
                <div className='flex items-center justify-between mt-7'>
                    <div className='flex items-center gap-4'>
                        <p>${product.price}</p>
                        <p className='line-through	text-gray-500'>${product.old_price}</p>
                    </div>
                    <Button className='text-2xl p-0' onClick={() => setshowOptions((prev) => !prev)}>
                        <IoMdAdd />
                    </Button>
                </div>
            </section>

            <div
                className={`overlay absolute transition-all ${
                    showCartOptions ? '-translate-y-0' : '-translate-y-full'
                } top-0 -bg--color-grey-900 bg-opacity-75 w-full h-full flex items-center pl-5`}>
                <IoMdClose
                    className='absolute top-2 right-2 text-2xl text-white cursor-pointer'
                    onClick={() => setshowOptions((prev) => !prev)}
                />
                {showCartOptions ? (
                    <div className='w-16 flex gap-4  z-[5]'>
                        <Dropdown
                            title='Size'
                            options={sizeOptions}
                            className='drop-shadow-md bg-black bg-opacity-65 text-white border border-white'
                        />
                        <Dropdown
                            title='Color'
                            options={sizeOptions}
                            className='drop-shadow-md  bg-black bg-opacity-65 text-white border border-white'
                        />
                    </div>
                ) : null}
                <Button
                    element='button'
                    varient='primary'
                    type='submit'
                    className='w-[70%]  bottom-16 absolute ml-9 z-[4]'>
                    Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default Card;
