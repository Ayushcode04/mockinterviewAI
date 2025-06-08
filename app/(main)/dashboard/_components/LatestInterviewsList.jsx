"use client"
import { Button } from '@/components/ui/button'
import { Camera, Video } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

function LatestInterviewsList() {
  const [interviewList, setInterviewsList] = useState([])
  return (
    <div className='my-5'>
      <h2 className='font-bold text-2xl'>Previously Created Interviews</h2>
      {interviewList?.length==0&&
      <div className='p-5 flex flex-col items-center justify-center gap-3 bg-white rounded-xl shadow-md mt-5'>
        <Video className='h-10 w-10 text-primary'/>
        <h2 className='text-gray-500'>No Interviews Created Yet</h2>
        <Button> + Create an Interview</Button>
      </div>}
    </div>
  )
}

export default LatestInterviewsList