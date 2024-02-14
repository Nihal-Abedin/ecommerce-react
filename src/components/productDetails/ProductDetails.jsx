import { useSearchParams, useParams } from 'react-router-dom';
import ProductImageView from './ProductImageView';
import ProductDetailsView from './ProductDetailsView';
import { useProduct } from '../../queryHooks/queries/products';

const ProductDetails = () => {
    const { slug } = useParams();
    const { data, isLoading } = useProduct(slug);

    console.log(data, isLoading, slug);
    const galleryImages = data&& data.data.gallery.map(img=>img.image)
    return (
        <div className='-bg--color-grey-200 rounded grid grid-cols-2 p-4 gap-4'>
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                    {' '}
                    <ProductImageView images={[...galleryImages, data.data.image]} />
                    <ProductDetailsView details={data.data}/>
                </>
            )}
        </div>
    );
};

export default ProductDetails;
