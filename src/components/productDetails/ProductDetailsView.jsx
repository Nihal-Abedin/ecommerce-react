import Input from '../views/Input';
import Dropdown from '../views/Dropdown';
import Button from '../views/Button';
import { SlBasket } from 'react-icons/sl';
import { FaHeart } from 'react-icons/fa';

const ProductDetailsView = ({details}) => {
    const sizeOptions = details.size.map(size=>({label:size.name,...size}));
    return (
        <div className='grid  gap-4 '>
            <main className='flex flex-col gap-6 border-b-2 border-gray-300'>
                <h1 className='text-4xl'>{details.title}</h1>
                <p>{details.rating}/5</p>
                <div className='flex gap-2 font-medium'>
                    <p className='line-through 	text-gray-500'>${details.price}</p>
                    <p>${details.old_price}</p>
                </div>
                <section className='text-gray-500'>{details.description}</section>
                <div className='grid grid-cols-1 w-[30%] gap-3 auto-rows-min'>
                    <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>Category</h1>
                        <span>{details.category.title}</span>
                    </div>
                    {details.specifications.map(spec=> <div className='grid grid-cols-2'>
                        <h1 className='font-bold'>{spec.title}</h1>
                        <span>{spec.content}</span>
                    </div>)}
                </div>
            </main>
            {/* <hr className=' bg-gray-300 h-[0.2rem] rounded' /> */}
            <div className='flex flex-col justify-between'>
                <section className='grid grid-cols-2 gap-6 text-xs '>
                    <Input placeholder='Quantity' type='number' className='rounded' min={0} />
                    <div className=' w-fit'>
                        <Dropdown title='Size' options={sizeOptions} className='border border-black' />
                    </div>
                </section>
                <footer className='flex gap-4 justify-start'>
                    <Button element='button'  type='button' varient='primary' className='flex gap-3 items-center'>
                        <SlBasket className='text-2xl' />
                        Add to Cart
                    </Button>
                    <Button element='button' type='button' varient='ghost' >
                        <FaHeart className='text-red-400'/>
                    </Button>
                </footer>
            </div>
        </div>
    );
};

export default ProductDetailsView;
