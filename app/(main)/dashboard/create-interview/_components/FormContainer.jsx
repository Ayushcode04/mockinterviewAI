import { Input } from '@/components/ui/input'
import React, { useEffect } from 'react'
import { Textarea } from '@/components/ui/textarea'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { InterviewType } from '@/services/Constants'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
function FormContainer({ onHandleInputChange, GoToNext }) {
    const [interviewType, setInterviewType] = useState('')

    useEffect(() => {
        if (interviewType) {
            onHandleInputChange('type', interviewType)
        }
    }, [interviewType])

    const AddInterviewType = (type) => {
        const data = interviewType.includes(type); 
        if (!data) {
            setInterviewType(prev => [...prev, type])
        }else {
            const result = interviewType.filter(item => item!=type)
            setInterviewType(result)
        }
    }
    
    return (
        <div className='bg-white p-5  rounded-lg shadow-md'>
            <div>
                <h2 className='text-sm font-medium'>Job Posistion</h2>
                <Input placeholder="e.g. Full Stack Developer"
                    className='mt-2'
                    onChange={(event) => onHandleInputChange('jobPosistion',event.target.value)}
                    />
            </div>
            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Job Description</h2>
                <Textarea placeholder="Enter details Job Description"
                    className="h-[200px] mt-2" 
                    onChange={(event) => onHandleInputChange('jobDescription',event.target.value)}
                    />
            </div>
            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Interview Duration</h2>
                <Select onValueChange={(value) => onHandleInputChange('duration',value)}>
                    <SelectTrigger className="w-full mt-2">
                        <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="5 min">5 Min</SelectItem>
                        <SelectItem value="15 min">15 Min</SelectItem>
                        <SelectItem value="30 min">30 Min</SelectItem>
                        <SelectItem value="45 min">45 Min</SelectItem>
                        <SelectItem value="60 min">60 Min</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className='mt-5'>
                <h2 className='text-sm font-medium'>Interview Type</h2>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {InterviewType.map((type, index) => (
                        <div key={index} className={`flex gap-2 mt-2 bg-white p-2 items-center
                    border border-gray-500 rounded-2xl cursor-pointer hover:bg-secondary transition-colors ${interviewType.includes(type.title) && 'bg-blue-100 text-primary'}`}
                    onClick={() => AddInterviewType(type.title)}>
                            <type.icon className='h-4 w-4'/>
                            <span>{type.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-7 flex justify-end' onClick={()=>GoToNext()}>
            <Button> Generate Questions <ArrowRight/></Button></div>
        </div>
    )
}

export default FormContainer