import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Copy, Mail, Plus } from 'lucide-react'
import { Clock } from 'lucide-react'
import { List } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'


function InterviewLink({ interview_id, formData }) {
  const url = process.env.NEXT_PUBLIC_HOST_URL+'/'+interview_id
  const GetinterviewUrl=()=> {   
    return url
  }

  const onCopyLink = async() => {
    await navigator.clipboard.writeText(url)
      .then(() => {
        toast.success('Link copied to clipboard!')
      })
      .catch(err => {
        toast.error('Failed to copy link!')
      })
  }

  return (
    <div className='flex flex-col items-center justify-center w-full p-2'>
        <Image src={'/check.png'} alt = 'check'
        width = {200}
        height = {200}
        className='mx-auto mb-4 w-[100px] h-[100px]' />
        <h1 className='text-lg font-bold text-center'>Your AI Interview Created Successfully!</h1>
        <p className='mt-3'>Share this Link with Candidates to start the interview process</p>
        <div className='w-full max-w-md p-4 mt-4 bg-white rounded-lg shadow-md'>
          <div className='flex justify-between items-center'>
            <h2 className='font-bold'>Interview Link</h2>
            <h2 className='p-1 px-2 text-primary bg-blue-50 rounded '>Valid for 30 Days</h2>
          </div>
          <div className=' flex gap-3 items-center mt-2 text-gray-500'>
              <Input defaultValue = {GetinterviewUrl()} disabled = {true}/>
              <Button onClick={() => onCopyLink()}>
                <Copy/>Copy Link  
                </Button>
            </div>
          <hr className='my-5'/>
          <div className='flex gap-5'>
            <h2 className='text-sm text-gray-500 flex gap-2 items-center'>
              <Clock className='h-4 w-4 ' />{formData?.duration|| '30 min'} Interview
            </h2>
            <h2 className='text-sm text-gray-500 flex gap-2 items-center'>
              <List className='h-4 w-4 ' /> 10
            </h2>
            <h2 className='text-sm text-gray-500 flex gap-2 items-center'>
              {/* <Calendar className='h-4 w-4 ' />{formData?.duration|| '30 min'} Interview */}
            </h2>
            </div>  
        </div>
        <div className='max-w-md p-4 mt-4 bg-white rounded-lg shadow-md w-full'>
          <h2 className='font-bold'>Share Via</h2>
          <div className='flex gap-2 mt-2'>
          <Button variant = {'outline'} className=''><Mail/> Email</Button>
          <Button variant = {'outline'} className=''><Mail/> Slack</Button>
          <Button variant = {'outline'} className=''><Mail/> Whatsapp</Button>

          </div>
        </div>
        <div className='flex gap-5 items-center justify-between w-full max-w-md mt-4'>
          <Link href={'/dashboard'}>
          <Button variant = {'outline'}><ArrowLeft/> Back to Dashboard</Button>
          </Link>
          <Link href={'create-interview'}>
          <Button><Plus/> Ceate New Interview</Button>
          </Link>
        </div>
    </div>
  )
}

export default InterviewLink