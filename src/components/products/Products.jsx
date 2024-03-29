import { useProducts } from '../../queryHooks/queries/products';
import Card from '../Card';
import Categories from '../categories/Categories';

const Products = () => {
    const { data, isLoading, isError, error } = useProducts();

    if (isError) {
        console.log(error);
        return <p>Something went wrong</p>;
    }
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <main>
            <div>
                <section className='text-center'>
                    <div className='flex flex-wrap gap-5 mb-4'>
                        {data.data.map((p) => (
                            <Card key={p.id} product={p} />
                        ))}
                    </div>
                </section>
                <div>
                    <Categories />
                </div>
                {/*Section: Wishlist*/}
            </div>
        </main>
    );
};

export default Products;
