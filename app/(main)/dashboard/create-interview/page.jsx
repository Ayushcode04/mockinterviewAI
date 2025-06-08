"use client"
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Progress } from '@/components/ui/progress';
import FormContainer from './_components/FormContainer';
import { useState } from 'react';
import QuestionList from './_components/QuestionList';
import { toast } from 'sonner';
import InterviewLink from './_components/InterviewLink';


function CreateInterview() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState()
  const [interviewId,setInterviewId] = useState()
  const onHandleInputChange = (feild, value) => {
    setFormData(prev => ({
      ...prev,
      [feild]: value
    }));

    console.log("FormData", formData);
  }
  const onGoToNext = () => {
    if (!formData?.jobPosistion || !formData?.jobDescription || !formData?.duration || !formData?.type) {
      toast('Please Enter All Details')
      return;
    }
    setStep(step + 1);

  }

  const onCreateLink = (interview_id) => {
    setInterviewId(interview_id)
    setStep(step + 1);
  }


  return (
    <div className='mt-10 px-10 md:px-24 lg:px-44 xl:px-56'>
      <div className='flex items-center gap-5'>
        <ArrowLeft onClick={() => router.back()} className='cursor-pointer' />
        <h2 className='font-bold text-2xl'>Create New Interview</h2>
      </div>
      <Progress value={step * 33.33} className='my-5' />
      {step == 1 ? <FormContainer onHandleInputChange={onHandleInputChange}
        GoToNext={() => onGoToNext()} />
        : step == 2 ? <QuestionList formData={formData} onCreateLink={(interview_id)=>onCreateLink(interview_id)}/> : 
        step == 3 ? <InterviewLink interview_id={interviewId}
        formData={formData}
        />:null}
    </div>
  )
}

export default CreateInterview