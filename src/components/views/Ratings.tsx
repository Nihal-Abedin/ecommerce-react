import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface PROPS {
    rating: number;
}
const Ratings: React.FC<PROPS> = ({ rating }) => {
    const flooredRating = Math.floor(rating);
    const hasDecimal = rating % Math.ceil(rating);
    const stars = new Array(flooredRating).fill('', 0, flooredRating);
    return (
        <div className='flex gap-2 text-xl items-center text-[#6366f1]'>
            {stars.map((_,i) => (
                <FaStar key={i}/>
            ))}
            {hasDecimal ? <FaStarHalfAlt /> : null}
            <p>{rating}</p>
        </div>
    );
};

export default Ratings;
