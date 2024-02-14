import { useState } from 'react';
// const images = [
//     'http://127.0.0.1:8000/%20media/category/web_first_images_release.png',
//     'http://127.0.0.1:8000/%20media/category/left2.jpeg',
//     'http://127.0.0.1:8000/%20media/category/right2.jpeg',
//     'http://127.0.0.1:8000/%20media/category/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',,
// ];
const ProductImageView = ({images}) => {
    const [previewImage, setPreviewImage] = useState(0);
    const handlePreview = (index) => {
        setPreviewImage(index)
    }
    return (
        <div className='flex flex-col justify-between'>
            <main className='min-h-96'>
                <img
                    src={images[previewImage]}
                    className='w-full h-96 mb-2 rounded-xl object-cover'
                    alt='prod'
                />
            </main>
            <section className='flex overflow-x-auto gap-5 p-2 w-full justify-center'>
                {images.map((img,i)=><img
                    src={img}
                    key={i}
                    className={`w-28 h-28 object-cover rounded-xl transition-all cursor-pointer ${previewImage === i?'scale-110':''}`}
                    alt='prod'  onClick={()=>handlePreview(i)}
                />)}
               
            </section>
        </div>
    );
};

export default ProductImageView;
