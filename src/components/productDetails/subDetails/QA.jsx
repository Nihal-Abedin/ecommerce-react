import Questions from '../../questions/Questions';
import AnsweresList from '../../questions/AnsweresList';

const QA = () => {
    return (
        <div className='grid grid-cols-2 gap-4 '>
            <Questions />
            <AnsweresList />
        </div>
    );
};

export default QA;
