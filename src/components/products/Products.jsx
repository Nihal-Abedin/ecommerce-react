import { useProducts } from '../../queryHooks/queries/products';
import Card from '../Card';

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
        <div>
            <main>
                <div className='container'>
                    <section className='text-center'>
                        <div className='row'>
                            <div className='col-lg-4 col-md-12 mb-4'>
                                {data.data.map((p) => (
                                    <Card key={p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    </section>
                    <div className="row">
                        <div className="col-lg-2">
                            <div className='w-4 h-4 rounded-circle bg-red'>cat</div>
                        </div>
                    </div>
                    {/*Section: Wishlist*/}
                </div>
            </main>
        </div>
    );
};

export default Products;
