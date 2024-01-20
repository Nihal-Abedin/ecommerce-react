import { useProducts } from '../../queryHooks/queries/products';
import Card from '../Card';
import Categories from '../categories/Categories';

const Products = () => {
    const { data, isLoading, isError, error } = useProducts();

    if (isError) {
        console.log(error);
        return <p>Something went wrong</p>;
    }
    console.log(data);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <main>
            <div>
                <section className='text-center'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-12 mb-4'>
                            {data.data.map((p) => (
                                <Card key={p.id} product={p} />
                            ))}
                        </div>
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
