import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import Input from '../components/views/InputV2';
import Dropdown from '../components/views/Dropdown';
import { SlBasket } from 'react-icons/sl';
import { MdAccountCircle } from 'react-icons/md';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa';
import { GoListUnordered } from 'react-icons/go';

import { FaRegUser } from 'react-icons/fa';

const Header = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn());

    const accountOption = [
        { label: 'Account', icon: MdAccountCircle },
        { label: 'Orders', icon: GoListUnordered },
        { label: 'Wishlist', icon: CiHeart },
        { label: 'Notifications', icon: FaRegBell },
        { label: 'Settings', icon: MdOutlineManageAccounts },
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
        <div className='w-full fixed flex items-center py-2 px-4 border-b border-darkfox-gray-border bg-white z-10'>
            <Link className='w-36 text-title-large-18-600' to='/'>
                My Shop
            </Link>

            <Input element='input' className='w-[50%]' search={true} placeholder='Search'/>

            <div className='w-full flex gap-4 justify-end items-center' id='navbarSupportedContent'>
                <Dropdown size='large' title='Account' select={false} options={accountOption} links />
                <Dropdown size='large' title='Vendor' select={false} options={vendorOption} />
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
                        <span className='absolute top-0 right-0 bg-darkfox-dead-deals text-white  p-0 rounded-full w-5 h-5 flex justify-center items-center text-sub-title-small-13-600'>
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
