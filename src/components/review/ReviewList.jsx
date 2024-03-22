import User from '../../assets/images/footer.png';
import Ratings from '../views/Ratings';
const reviews = [
    {
        name: 'user 1',
        image: User,
        date: 'August 15, 2023',
        review: 'Very Good',
        rating: 4.5,
    },{
        name: 'user 2',
        image: User,
        date: 'August 15, 2023',
        review: 'Very Good',
        rating: 3.5,
    },{
        name: 'user 3',
        image: User,
        date: 'August 15, 2023',
        review: 'Very Good',
        rating: 5,
    },
];
const ReviewList = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='text-title-large-20-600 mb-3'>Existing Reviews</h1>
            {reviews.map((rev, i) => (
                <div className='flex gap-4 h-40 border overflow-hidden rounded-lg shadow-md' key={i}>
                    <img src={rev.image} className='w-40  object-cover' alt='vendore image' />
                    <div className='h-full flex flex-col justify-center gap-2 p-2  w-full'>
                        <h3 className='text-title-medium-16-600'>{rev.name}</h3>
                        <p className='text-title-small-15-600 text-gray-400'>{rev.date}</p>
                        <Ratings rating={rev.rating} />
                        <p className='text-title-small-15-500 text-gray-400 truncate max-w-80' title={rev.review}>{rev.review}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
