import Review from '../../review/Review';

const ReviewDetails = () => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            <Review />
            <h1>Reviews</h1>
        </div>
    );
};

export default ReviewDetails;
