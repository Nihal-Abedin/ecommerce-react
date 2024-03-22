import { useParams } from 'react-router-dom';
import { queryClient } from '../../../App';
import { PRODUCT_KEYS } from '../../../queryHooks/queryKeys';

const Specifications = () => {
    const { slug } = useParams();
    const prod = queryClient.getQueryData(PRODUCT_KEYS.list(slug)).data;

    return (
        <div className='grid grid-cols-1 max-w-md min-w-[30%] gap-3 auto-rows-min'>
            <div className='grid grid-cols-2'>
                <h1 className='text-title-small-15-600'>Category</h1>
                <span className='text-sub-title-medium-14-500 text-paragraph'>{prod.category.title}</span>
            </div>
            {prod.specifications.map((spec) => (
                <div className='grid grid-cols-2' key={spec.content}>
                    <h1 className='text-title-small-15-600'>{spec.title}</h1>
                    <span className='text-sub-title-medium-14-500 text-paragraph'>{spec.content}</span>
                </div>
            ))}
        </div>
    );
};
export default Specifications;
