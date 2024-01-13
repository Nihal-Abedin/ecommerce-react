import { useProducts } from '../../queryHooks/queries/products';

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
                                    <div className='card'>
                                        <div className='bg-image hover-zoom ripple' data-mdb-ripple-color='light'>
                                            <img
                                                src='https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg'
                                                className='w-100'
                                            />
                                            <a href='#!'>
                                                <div className='mask'>
                                                    <div className='d-flex justify-content-start align-items-end h-100'>
                                                        <h5>
                                                            <span className='badge badge-primary ms-2'>New</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div className='hover-overlay'>
                                                    <div
                                                        className='mask'
                                                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                        <div className='card-body'>
                                            <a href='' className='text-reset'>
                                                <h5 className='card-title mb-3'>{p.title}</h5>
                                            </a>
                                            <a href='' className='text-reset'>
                                                <p>{p.category.title}</p>
                                            </a>
                                            <h6 className='mb-3'>${p.price}</h6>
                                            <div className='btn-group'>
                                                <button
                                                    className='btn btn-primary dropdown-toggle'
                                                    type='button'
                                                    id='dropdownMenuClickable'
                                                    data-bs-toggle='dropdown'
                                                    data-bs-auto-close='false'
                                                    aria-expanded='false'>
                                                    Variation
                                                </button>
                                                <ul className='dropdown-menu' aria-labelledby='dropdownMenuClickable'>
                                                    <div className='d-flex flex-column'>
                                                        <li className='p-1'>
                                                            <b>Size</b>: XL
                                                        </li>
                                                        <div className='p-1 mt-0 pt-0 d-flex flex-wrap'>
                                                            <li>
                                                                <button className='btn btn-secondary btn-sm me-2 mb-1'>
                                                                    XXL
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button className='btn btn-secondary btn-sm me-2 mb-1'>
                                                                    XXL
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button className='btn btn-secondary btn-sm me-2 mb-1'>
                                                                    XXL
                                                                </button>
                                                            </li>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex flex-column mt-3'>
                                                        <li className='p-1'>
                                                            <b>COlor</b>: Red
                                                        </li>
                                                        <div className='p-1 mt-0 pt-0 d-flex flex-wrap'>
                                                            <li>
                                                                <button
                                                                    className='btn btn-sm me-2 mb-1 p-3'
                                                                    style={{ backgroundColor: 'red' }}
                                                                />
                                                            </li>
                                                            <li>
                                                                <button
                                                                    className='btn btn-sm me-2 mb-1 p-3'
                                                                    style={{ backgroundColor: 'green' }}
                                                                />
                                                            </li>
                                                            <li>
                                                                <button
                                                                    className='btn btn-sm me-2 mb-1 p-3'
                                                                    style={{ backgroundColor: 'yellow' }}
                                                                />
                                                            </li>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex mt-3 p-1'>
                                                        <button type='button' className='btn btn-primary me-1 mb-1'>
                                                            <i className='fas fa-shopping-cart' />
                                                        </button>
                                                        <button
                                                            type='button'
                                                            className='btn btn-danger px-3 me-1 mb-1 ms-2'>
                                                            <i className='fas fa-heart' />
                                                        </button>
                                                    </div>
                                                </ul>
                                                <button type='button' className='btn btn-danger px-3 me-1 ms-2'>
                                                    <i className='fas fa-heart' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/*Section: Wishlist*/}
                </div>
            </main>
        </div>
    );
};

export default Products;
