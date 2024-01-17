import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const Header = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

    return (
        <div >
            <nav >
                <div className='flex bg-red-500'>
                    <Link className='' to='/'>
                        My Shop{' '}
                    </Link>
                    <div className='flex bg-red-500' id='navbarSupportedContent'>
                        <ul className=''>
                            <li className=''>
                                <a
                                    className=''
                                    href='#'
                                    id='navbarDropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'>
                                    Account
                                </a>
                                <ul className='' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <Link to={'/customer/account/'} className=''>
                                            <i className='fas fa-user'></i> Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to={`/customer/orders/`}>
                                            <i className='fas fa-shopping-cart'></i> Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to={`/customer/wishlist/`}>
                                            <i className='fas fa-heart'></i> Wishlist
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to={`/customer/notifications/`}>
                                            <i className='fas fa-bell fa-shake'></i> Notifications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to={`/customer/settings/`}>
                                            <i className='fas fa-gear fa-spin'></i> Settings
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className=''>
                                <a
                                    className=''
                                    href='#'
                                    id='navbarDropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'>
                                    Vendor
                                </a>
                                <ul className='' aria-labelledby='navbarDropdown'>
                                    <li>
                                        <Link className='' to='/vendor/dashboard/'>
                                            {' '}
                                            <i className='fas fa-user'></i> Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/products/'>
                                            {' '}
                                            <i className='bi bi-grid-fill'></i> Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/product/new/'>
                                            {' '}
                                            <i className='fas fa-plus-circle'></i> Add Products
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/orders/'>
                                            {' '}
                                            <i className='fas fa-shopping-cart'></i> Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/earning/'>
                                            {' '}
                                            <i className='fas fa-dollar-sign'></i> Earning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/reviews/'>
                                            {' '}
                                            <i className='fas fa-star'></i> Reviews
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/coupon/'>
                                            {' '}
                                            <i className='fas fa-tag'></i> Coupon
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/notifications/'>
                                            {' '}
                                            <i className='fas fa-bell fa-shake'></i> Notifications
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='' to='/vendor/settings/'>
                                            {' '}
                                            <i className='fas fa-gear fa-spin'></i> Settings
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className=''>
                            <input
                                name='search'
                                className=''
                                type='text'
                                placeholder='Search'
                                aria-label='Search'
                            />
                            <button className='' type='submit'>
                                Search
                            </button>
                        </div>
                        {!isLoggedIn ? (
                            <Link className={` ${isLoggedIn ? '' : 'hidden'}`} to='/login'>
                                Login
                            </Link>
                        ) : null}
                        {!isLoggedIn ? (
                            <Link className={` ${isLoggedIn ? '' : 'hidden'}`} to='/register'>
                                Register
                            </Link>
                        ) : null}
                        {/* These are the button rendered based on users logged in status */}
                        {/* You could just un-comment it ;) */}
                        {/* {isLoggedIn()
                    ?
                    <>
                        <Link className="btn btn-primary me-2" to={'/customer/account/'}>Account</Link>
                        <Link className="btn btn-primary me-2" to="/logout">Logout</Link>
                    </>
                    :
                    <>
                        <Link className="btn btn-primary me-2" to="/login">Login</Link>
                        <Link className="btn btn-primary me-2" to="/register">Register</Link>

                    </>
                } */}
                        <Link className={`${isLoggedIn ? '' : 'hidden'}`} to='/cart/'>
                            <i className='fas fa-shopping-cart'></i> <span id='cart-total-items'>{0}</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
