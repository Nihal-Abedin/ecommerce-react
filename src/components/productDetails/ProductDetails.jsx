import { useSearchParams, useParams } from 'react-router-dom';
import ProductImageView from './ProductImageView';
import ProductDetailsView from './ProductDetailsView';
import Tabs from '../views/Tabs';
import { useProduct } from '../../queryHooks/queries/products';
import Specifications from './subDetails/Specifications';
import VendorDetails from './subDetails/VendorDetails';
import ReviewDetails from './subDetails/ReviewDetails';
import QA from './subDetails/QA';
const tabs = [
    {
        label: 'Secifications',
        content: <Specifications/>,
        key: 'tab1',
    },
    {
        label: 'Vendor',
        content: <VendorDetails/>,
        key: 'tab2',
    },
    {
        label: 'Review',
        content: <ReviewDetails/>,
        key: 'tab3',
    },
    {
        label: 'Q&A',
        content: <QA/>,
        key: 'tab4',
    },
];
const ProductDetails = () => {
    const { slug } = useParams();
    const { data, isLoading } = useProduct(slug);

    return (
        <div className=' p-4 '>
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    <div className='bg-white rounded grid grid-cols-1 md:grid-cols-2 p-4 gap-4 mb-4'>
                        <ProductImageView />
                        <ProductDetailsView />
                    </div>
                    <Tabs tabs={tabs}/>
                </>
            )}
        </div>
    );
};

export default ProductDetails;
