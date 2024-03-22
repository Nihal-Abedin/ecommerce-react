import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

type CAROUSEL_TYPE = {
    images: [{ image: string; title: string }];
    isLoading: boolean;
};

const maxShowCount = 4;
const Carousel: React.FC<CAROUSEL_TYPE> = ({ images, isLoading }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlice = () => {
        setCurrentIndex((prev) => ++prev % images?.length);
    };
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images?.length - 1 : prev - 1));
    };
    return (
        <>
            {isLoading ? (
                'Loading...'
            ) : (
                <div className='relative '>
                    <div
                        className={`w-full  grid grid-flow-col ${
                            images?.length >= maxShowCount ? '' : 'justify-center'
                        } gap-5 auto-cols-max bg-darkfox-ash bg-opacity-25 overflow-hidden rounded-md p-4`}>
                        {images?.map((item, i) => (
                            <div
                                key={i}
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                className='relative  w-[241px] h-[241px] object-cover  transition-all rounded-2xl overflow-hidden'>
                                <img
                                    title={item.title}
                                    src={item.image}
                                    alt={item.title}
                                    className=' w-full h-full object-cover rounded-2xl'
                                />
                                <div className='absolute bottom-0 text-white h-full w-full  bg-gradient-to-t from-[-30%] from-black flex items-end p-4'>
                                    <h1 className='text-title-large-18-600'>{item.title}</h1>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div
                        onClick={() => prevSlide()}
                        className='w-10 h-10 rounded-full bg-white absolute top-1/2 left-3 -shadow--shadow-lg -translate-y-1/2 flex justify-center items-center'>
                        <FaChevronLeft />
                    </div>
                    <div
                        onClick={() => nextSlice()}
                        className='w-10 h-10 rounded-full bg-white absolute top-1/2  right-3 -shadow--shadow-lg rotate-180 -translate-y-1/2 flex justify-center items-center'>
                        <FaChevronLeft />
                    </div>
                </div>
            )}
        </>
    );
};
export default Carousel;
