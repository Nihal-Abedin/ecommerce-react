import { useEffect, useState } from 'react';
import { useCategoriesList } from '../../queryHooks/queries/categories';
import Carousel from '../views/Carousel';
const Categories = () => {
    const { data, isPending } = useCategoriesList();
    const [filterdImages, setFilterdImages] = useState(null);

    useEffect(() => {
        setFilterdImages(data?.data?.filter((d) => ({ image: d.image, title: d.title })));
    }, [data]);

    return (
        <div className='flex flex-col gap-12 mt-9'>
            <h1 className='text-center text-title-large-22-600 '>Categories</h1>
            <Carousel images={filterdImages} isLoading={isPending} />
        </div>
    );
};

export default Categories;
