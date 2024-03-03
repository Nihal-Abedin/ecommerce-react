import Button from '../../views/Button';
import Ratings from '../../views/Ratings';
import vendorImage from "../../../assets/images/footer.png";
const rate = 4.2
const VendorDetails = () => {
    return (
        <div className='flex gap-4 h-60 border-t border-b w-5/12'>
            <img src={vendorImage} className='w-40  object-cover' alt='vendore image' />
            <div className='h-full flex flex-col justify-center  gap-4 '>
                <h3 className='text-2xl'>Name</h3>
                <p className='text-lg text-gray-400'>Role</p>
                <Ratings rating={rate}/>
                <div className='flex gap-4'>
                    <Button element='button' type='button'  varient='primary'>
                        Follow
                    </Button>
                    <Button element='button' type=''  varient='ghost'>
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default VendorDetails;
