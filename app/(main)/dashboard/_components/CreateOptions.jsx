import React from 'react'
import { Video, Phone } from 'lucide-react'
import Link from 'next/link'

function CreateOptions() {
  return (
    <div className='grid grid-cols-2 gap-5 p-5 bg-white rounded-xl shadow-md'>
        <Link  href={'/dashboard/create-interview'} className='bg-white border-gray-200 border p-5 rounded-lg hover:shadow-lg transition-shadow cursor-pointer'>
            <Video className = "p-3 text-primary bg-blue-50 rounded-lg h-12 w-12"/>
            <h2 className='font-bold text-gray-500'>Create New Interview</h2>
            <p>Create AI Interviews and Scheule them with Candidates</p>
        </Link>
        <div className='bg-white border-gray-200 border p-5 rounded-lg hover:shadow-lg transition-shadow cursor-pointer'>
            <Phone className = "p-3 text-primary bg-blue-50 rounded-lg h-12 w-12"/>
            <h2 className='font-bold text-gray-500'>Create Phone Screening Call</h2>
            <p>Schedule Phone Screening Call with Candidates</p>
        </div>
    </div>
  )
}

export default CreateOptions