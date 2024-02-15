import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { PRODUCT_KEYS } from '../../queryHooks/queryKeys';
import { queryClient } from '../../App';

const ProductImageView = () => {
    const { slug } = useParams();
    const [previewImage, setPreviewImage] = useState(0);
    const prod = queryClient.getQueryData(PRODUCT_KEYS.list(slug));
    const handlePreview = (index) => {
        setPreviewImage(index);
    };
    const images = [...prod.data.gallery.map((p) => p.image), prod.data.image];
    // console.log(imagesV2);
    return (
        <div className='flex flex-col justify-between'>
            <main className='flex justify-center  bg-gray-400 bg-opacity-20 mb-2 rounded-xl '>
                <img src={images[previewImage]} className=' rounded-xl  h-[30rem] object-center object-contain' alt='prod' />
            </main>
            <section className='flex overflow-x-auto gap-5 p-2 w-full justify-center'>
                {images.map((img, i) => (
                    <img
                        src={img}
                        key={i}
                        className={`w-28 h-28 object-cover rounded-xl transition-all cursor-pointer ${
                            previewImage === i ? 'scale-110' : ''
                        }`}
                        alt='prod'
                        onClick={() => handlePreview(i)}
                    />
                ))}
            </section>
        </div>
    );
};

export default ProductImageView;
