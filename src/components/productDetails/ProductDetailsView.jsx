
import { queryClient } from '../../App';
import { PRODUCT_KEYS } from '../../queryHooks/queryKeys';
import { useParams } from 'react-router-dom';
import Specifications from './subDetails/Specifications';
import ProductSelection from './ProductSelection';

const ProductDetailsView = () => {
    const { slug } = useParams();
    const prod = queryClient.getQueryData(PRODUCT_KEYS.list(slug)).data;


    return (
        <div className='md:grid  gap-4  '>
            <main className=' hidden md:flex flex-col gap-6 border-b-2 border-gray-300'>
                <h1 className='text-title-large-22-600'>{prod.title}</h1>
                <p className='text-gray-500 text-title-small-15-600'>{prod.rating}/5</p>
                <div className='flex gap-2 text-title-small-15-600'>
                    <p className='line-through 	text-gray-500'>${prod.price}</p>
                    <p>${prod.old_price}</p>
                </div>
                <section className='text-gray-500 text-title-small-15-600'>{prod.description}</section>
                <Specifications />
            </main>
            <ProductSelection prod={prod}/>
        </div>
    );
};

export default ProductDetailsView;
