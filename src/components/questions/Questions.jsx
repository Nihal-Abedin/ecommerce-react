import Input from '../views/InputV2';
import Button from '../views/Button';
const Questions = () => {
    return (
        <div>
            <h1 className='text-title-large-20-600 mb-3'>Ask a Question</h1>
            <form className='flex flex-col gap-3'>
                <label className='flex flex-col gap-3'>
                    <h2 className='text-title-small-15-600'>Username</h2>
                    <Input element='input' placeholder='Enter your Username' />
                </label>
                <label className='flex flex-col gap-3'>
                    <h2 className='text-title-small-15-600'>Question</h2>
                    <Input element='textarea' resize={false} rows={5} placeholder='Write your Review' />
                </label>
                <Button element='button' varient='primary' className='w-fit mt-4 self-end' type='submit'>
                    Submit
                </Button>
            </form>
        </div>
    );
};
export default Questions;
