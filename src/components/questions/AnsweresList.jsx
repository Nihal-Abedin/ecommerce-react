const answers = [
    {
        name: 'user 1',
        date: 'August 15, 2023',
        ques: 'what?',
        answer: 'Yes!',
    },
    {
        name: 'user 2',
        date: 'August 15, 2023',
        ques: 'what?',
        answer: 'Yes!',
    },
    {
        name: 'user 3',
        date: 'August 15, 2023',
        ques: 'what?',
        answer: 'Yes!',
    },
    {
        name: 'user 4',
        date: 'August 15, 2023',
        ques: 'what?',
        answer: 'Yes!',
    },
];
const AnswersList = () => {
    return (
        <div className='flex flex-col gap-2 '>
            <h1 className='text-title-large-20-600  mb-3'>Questions & Answers</h1>
            {answers.map((ans, i) => (
                <div
                    className='flex flex-col justify-center gap-2 w-full min-h-40 border overflow-hidden rounded-lg shadow-md p-5 text-sm text-gray-600'
                    key={i}>
                    <h3 className='text-title-medium-16-600'>{ans.name}</h3>
                    <p className='text-body-medium-13-500 text-gray-400'>{ans.date}</p>
                    <p className='text-title-small-15-600 text-gray-400'>{ans.ques}</p>
                    <div className='mt-2'>
                        <p className='text-title-small-15-600 text-gray-400'>Answer:</p>
                        <p className='text-sub-title-small-13-600 text-gray-400'>{ans.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnswersList;
