"use client"
import React from 'react'
import Image from 'next/image'
import { Clock, Video } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { supabase } from '@/services/supabaseClient';
import { toast } from 'sonner'
import { useContext } from 'react'
import { InterviewDataContext } from '@/context/InterviewDataContext'
import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'






function Interview() {

    const { interview_id } = useParams();
    const [interviewData, setInterviewData] = useState({})
    const [loading, setLoading] = useState(false)
    const [userName, setUserName] = useState()
    const [userEmail, setUserEmail] = useState()
    const { interviewInfo, setInterviewInfo } = useContext(InterviewDataContext)
    const router = useRouter()


    useEffect(() => {
        interview_id && GetInterviewDetails()
    }, [interview_id])

    const GetInterviewDetails = async () => {
        setLoading(true)
        try {
            let { data: Interviews, error } = await supabase
                .from('interviews')
                .select('jobPosistion,jobDescription, duration,type')
                .eq('interview_id', interview_id)

            setInterviewData(Interviews[0])
            if (Interviews.length === 0) {
                toast.error('Invalid interview link')
                setLoading(false)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
    }

    const onJoinInterview = async () => {
    setLoading(true)
    let {data: interview, error} = await supabase
    .from('interviews')
    .select('*')
    .eq('interview_id', interview_id)

    setInterviewInfo({
      userName: userName,
      userEmail: userEmail,
      interviewData: interview[0],
    })
    router.push(`/interview/${interview_id}/start`) 
    setLoading(false)

  }

  


    return (
        <div className=' px-10 md:px-28 lg:px-48 xl:px-64 mt-16 '>
            <div className='flex flex-col items-center border rounded-lg bg-white p-7 lg:px-33 xl:px-52 shadow-md mb-20'>
                <Image src={'/logo.png'} alt='logo' width={100}
                    height={100}
                    className='w-[90px] h-[90px]' />

                <h2 className='ml-8 mt-3 font-medium'>AI-Powered Interview Platform</h2>

                <Image src={'/interview.png'} alt='interview' width={500}
                    height={500}
                    className='w-[280px] border my-6 rounded-lg' />

                <h2 className='font-bold text-xl '>{interviewData?.jobPosistion}</h2>


                <h2 className='flex items-center gap-2 text-gray-500  mt-2'>
                    <Clock className='h-4 w-4 ' />{interviewData?.duration} minutes
                </h2>

                <div className='w-full mt-4 '>
                    <h2 className='mb-2'>Enter your Full Name</h2>
                    <Input placeholder='Enter your name'onChange={(e) => setUserName(e.target.value)} 
                    />
                </div>
                <div className='p-3 bg-blue-50 flex gap-4 rounded-xl mt-6'>
                    <Info className='text-primary' />
                    <div>
                        <h2 className='font-bold'>Before you begin</h2>
                        <ul className='text-sm text-primary'>
                            <li>- Test your camera and microphone</li>
                            <li>- Ensure you have a stable internet connection</li>
                            <li>- Find a Quit place for interview</li>
                        </ul>
                    </div>
                </div >
                <Button 
        disabled={loading || !userName}
        onClick={() => onJoinInterview()}
        className='mt-6 font-bold'><Video className='h-4 w-4' /> {loading && <Loader2Icon/>} Start Interview</Button>
            </div>
        </div>

    )
}

export default Interview