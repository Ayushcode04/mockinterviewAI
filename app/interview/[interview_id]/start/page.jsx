"use client"

import { InterviewDataContext } from '@/context/InterviewDataContext'
import React, { useContext } from 'react'
import { Mic, Phone, Timer } from 'lucide-react'
import Image from 'next/image'
import Vapi from '@vapi-ai/web';

function StartInterview() {

  const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)

  return (
    <div className='p-20 lg:px-48 xl:px-56 '>
      <h2 className='font-bold text-xl flex justify-between'>
        AI Interview Section
        <span className='flex gap-2 items-center'>
          <Timer />
          00:00:00
        </span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-5'>
        <div className='bg-white h-[400px] rounded-lg border flex items-center justify-center flex-col gap-3 '>
          <Image src={'/download.jpeg'} alt='ai'
            width={100}
            height={100}
            className='w-[200px] h-[200px] rounded-full object-cover'
          />
          <h2>AI Recruiter</h2>
        </div>
        <div className='bg-white  rounded-lg border flex items-center justify-center flex-col gap-3  '>
          <h2 className='text-9xl text-center bg-blue-400 text-white p-4 rounded-full px-5 w-[200px] h-[200px]'>
            {interviewInfo?.userName[0]}
          </h2>
          <h2>{interviewInfo?.userName}</h2>
        </div>
      </div>
      <div className='flex items-center gap-5 justify-center mt-7'>
        <Mic className='h-12 w-12 p-3 text-white bg-gray-500 rounded-full cursor-pointer' />
        <Phone className='h-12 w-12 p-3 rounded-full bg-red-500 text-white cursor-pointer'/>
      </div>
      <h2 className='text-sm text-gray-400 text-center mt-5'>Interview In Progress.....</h2>
    </div>
  )
}

export default StartInterview