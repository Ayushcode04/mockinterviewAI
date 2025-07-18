"use client"
import React from 'react'
import InterviewHeader from '../interview/_components/InterviewHeader'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { useState } from 'react'

function Interviewlayout({children }) {
    const [interviewInfo, setInterviewInfo] = useState()
  return (
    <InterviewDataContext.Provider value={{interviewInfo, setInterviewInfo}}>
    <div className='bg-secondary'>
        <InterviewHeader />
        {children}
    </div>
    </InterviewDataContext.Provider>
  )
}

export default Interviewlayout