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
            <h1 className='text-2xl font-medium mb-3'>Questions & Answers</h1>
            {answers.map((ans, i) => (
                <div
                    className='flex flex-col justify-center gap-2 w-full min-h-40 border overflow-hidden rounded-lg shadow-md p-5 text-sm text-gray-600'
                    key={i}>
                    <h3 className='text-2xl'>{ans.name}</h3>
                    <p>{ans.date}</p>
                    <p>{ans.ques}</p>
                    <div className='mt-2'>
                        <p>Answer:</p>
                        <p>{ans.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AnswersList;
