import { useState } from 'react';
import InputV2 from '../views/InputV2';
import Button from '../views/Button';
import Ratings from '../views/Ratings';
const min = 0;
const max = 5;
const Review = () => {
    const [rating, setRating] = useState(0);
    const handleNumberInput = (e) => {
        const value = e.currentTarget.value
        if (+value > max) {
            
            setRating(max);
            e.currentTarget.value = max
            return;
        }
        if (+value < min) {
            setRating(min);
            e.currentTarget.value = min

            return;
        }

        setRating(+value);
    };
    return (
        <div>
            <h1 className='text-title-large-20-600 mb-3'>Create a New Review</h1>
            <form className='flex flex-col gap-3'>
                <label className='flex flex-col gap-3'>
                    <h2 className='text-title-small-15-600'>Username</h2>
                    <InputV2 element='input' placeholder='Enter your Username' />
                </label>
                <label className='flex flex-col gap-3'>
                    <h2 className='text-title-small-15-600'>Review</h2>
                    <InputV2 element='textarea' resize={false} rows={5} placeholder='Write your Review' />
                </label>
                <label className='flex flex-col gap-3'>
                    <h2 className='text-title-small-15-600 flex gap-2'>
                        Ratings
                        {!!rating ? <Ratings rating={rating} /> : null}
                    </h2>
                    <InputV2
                        element='input'
                        placeholder='rating 0-5'
                        step={0.5}
                        defaultValue={rating}
                        onChange={(e) => handleNumberInput(e)}
                        min={0}
                        max={5}
                        type='number'
                    />
                </label>
                <Button element='button' varient='primary' className='w-fit mt-4 self-end' type='submit'>Submit</Button>
            </form>
        </div>
    );
};

export default Review;
