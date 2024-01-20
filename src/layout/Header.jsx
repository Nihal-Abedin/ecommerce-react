import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import Input from '../components/views/Input';
import Dropdown from '../components/views/Dropdown';
import { SlBasket } from 'react-icons/sl';
import { FaRegUser } from 'react-icons/fa';

const Header = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

    const accountOption = [
        { label: 'Account', icon: SlBasket },
        { label: 'Orders' },
        { label: 'Wishlist' },
        { label: 'Notifications' },
        { label: 'Settings' },
    ];
    const vendorOption = [
        { label: 'Dashboard' },
        { label: 'Products' },
        { label: 'Add Products' },
        { label: 'Orders' },
        { label: 'Earning' },
        { label: 'Reviews' },
        { label: 'Coupon' },
        { label: 'Notifications' },
        { label: 'Settings' },
    ];

    return (
        <div className='w-full fixed flex items-center py-2 px-4 bg-[#F7F8FA] z-10'>
            <Link className='w-36 font-medium' to='/'>
                My Shop
            </Link>

            <Input
                name='search'
                className='w-[50%] rounded-md'
                search={true}
                type='text'
                placeholder='Search'
                aria-label='Search'
            />

            <div className='w-full flex gap-4 justify-end items-center' id='navbarSupportedContent'>
                <Dropdown title='Account' options={accountOption} />
                <Dropdown title='Vendor' options={vendorOption} />
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

                <div className='relative  p-2'>
                    <Link className={`${isLoggedIn ? '' : 'hidden'}`} to='/cart/'>
                        <SlBasket className='text-2xl' />
                        <span className='absolute top-0 right-0 bg-red-500 text-white  p-0 rounded-full w-5 h-5 flex justify-center items-center'>
                            2
                        </span>
                    </Link>
                </div>

                {isLoggedIn ? (
                    <div className='w-10 h-10 -bg--color-grey-300 flex justify-center items-center rounded-full'>
                        <FaRegUser />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Header;
