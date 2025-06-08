import Image from 'next/image'
import React from 'react'


function InterviewHeader() {
  return (
    <div className='p-2 shadow-sm my-2 bg-white'>
      <Image src={'/logo.png'} alt ='logo' width={50}
      height = {50}
      className='w-[90px] h-[90px] '/>
    </div>
  )
}

export default InterviewHeader