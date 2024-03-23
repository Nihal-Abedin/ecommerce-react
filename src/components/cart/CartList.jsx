import vendorImage from '../../assets/images/footer.png';
import { MdDelete } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';
import Input from '../views/InputV2';
import Button from '../views/Button';
import { IoIosInformationCircle } from 'react-icons/io';
import { RiVisaFill } from 'react-icons/ri';
import { SiAmericanexpress } from 'react-icons/si';
import { FaCcMastercard } from 'react-icons/fa6';
import { FaPaypal } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';

const CartList = () => {
    return (
        <div className='flex flex-col pb-4'>
            <div className='flex justify-between py-3 border-b-2  border-darkfox-gray-border '>
                <div className='flex gap-3'>
                    <img src={vendorImage} className='w-40 h-40 rounded-lg  object-cover' alt='vendore image' />
                    <div>
                        <h1 className='text-title-large-20-600 mb-3'>Name</h1>
                        <h2 className='text-sub-title-medium-14-500 text-paragraph'>
                            Price: <span>$1233</span>
                        </h2>
                        <h2 className='text-sub-title-medium-14-500 text-paragraph'>
                            Size: <span>XL</span>
                        </h2>
                        <h2 className='text-sub-title-medium-14-500 text-paragraph'>
                            Color: <span>Red</span>
                        </h2>
                        <div className='flex gap-5 text-sub-title-medium-14-500 text-paragraph mt-7'>
                            <div className='flex items-center gap-1 hover:text-error cursor-pointer  transition-colors'>
                                <MdDelete />
                                <span className='underline'>Remove</span>
                            </div>
                            <div className='flex items-center gap-1 hover:text-primary transition-colors cursor-pointer'>
                                <FaHeart />
                                <span className='underline'>Move To Wishlist</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex gap-2 justify-center'>
                        <Input element='input' type='number' min={1} defaultValue={1} className='w-[30%]' />
                        <Button element='button' type='button' varient='primary'>
                            <IoMdRefresh />
                        </Button>
                    </div>
                    <div className='flex gap-2  mb-7 '>
                        <p className='text-gray-500'>Sub total:</p>
                        <p className='text-title-large-18-600'>${`22`}</p>
                    </div>
                    {/* <p className=' text-sub-title-small-13-600 text-error mb-7'>You save 15%</p> */}
                </div>
            </div>
            <div className='flex justify-between py-3 border-b-2  border-darkfox-gray-border '>
                <div className='flex gap-3'>
                    <img src={vendorImage} className='w-40 h-40 rounded-lg  object-cover' alt='vendore image' />
                    <div>
                        <h1 className='text-title-large-20-600 mb-3'>Name</h1>
                        <h2 className='text-sub-title-medium-14-500 text-paragraph'>
                            Price: <span>$1233</span>
                        </h2>
                        <h2 className='text-sub-title-medium-14-500 text-paragraph'>
                            Size: <span>XL</span>
                        </h2>
                        <h2 className='text-sub-title-medium-14-500 text-paragraph'>
                            Color: <span>Red</span>
                        </h2>
                        <div className='flex gap-5 text-sub-title-medium-14-500 text-paragraph mt-7'>
                            <div className='flex items-center gap-1 hover:text-error cursor-pointer  transition-colors'>
                                <MdDelete />
                                <span className='underline'>Remove</span>
                            </div>
                            <div className='flex items-center gap-1 hover:text-primary transition-colors cursor-pointer'>
                                <FaHeart />
                                <span className='underline'>Move To Wishlist</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center'>
                    <div className='flex gap-2 justify-center'>
                        <Input element='input' type='number' min={1} defaultValue={1} className='w-[30%]' />
                        <Button element='button' type='button' varient='primary'>
                            <IoMdRefresh />
                        </Button>
                    </div>
                    <div className='flex gap-2  mb-7 '>
                        <p className='text-gray-500'>Sub total:</p>
                        <p className='text-title-large-18-600'>${`22`}</p>
                    </div>
                    {/* <p className=' text-sub-title-small-13-600 text-error mb-7'>You save 15%</p> */}
                </div>
            </div>
            {/* <div className='flex text-body-large-15-500 font-normal text-primary mt-10 items-center gap-2'>
                <IoIosInformationCircle />
                <p>Do not delay the purchase, adding items to your cart doesn't mean booking them.</p>
            </div>
            <div className='mt-10 flex flex-col gap-6'>
                <h1 className='text-title-medium-16-600'>We accept</h1>
                <div className='flex text-5xl gap-3 text-primary'>
                    <RiVisaFill />
                    <SiAmericanexpress />
                    <FaCcMastercard />
                    <FaPaypal />
                </div>
            </div> */}
        </div>
    );
};
export default CartList;
