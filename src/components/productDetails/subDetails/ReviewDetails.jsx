import Review from '../../review/Review';
import ReviewList from '../../review/ReviewList';

const ReviewDetails = () => {
    return (
        <div className='grid grid-cols-2 gap-4 '>
            <Review />
            <ReviewList/>
        </div>
    );
};

export default ReviewDetails;
