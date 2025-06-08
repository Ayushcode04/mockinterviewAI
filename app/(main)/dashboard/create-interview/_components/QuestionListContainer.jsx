import React from 'react'

function QuestionListContainer({questionList}) {
    return (
        <div>
            <h2 className='font-bold text-lg'>Generated Interview Questions:</h2>
            <div className=' bg-blue-100 text-black p-2 rounded-xl'>
                {questionList.map((item, index) => (
                    <div key={index} className='p-3 bg-white rounded-xl shadow-md my-2'>
                        <h2 className='font-medium'>{item.question}</h2>
                        <h2 className='text-sm'>Type : {item?.type}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionListContainer