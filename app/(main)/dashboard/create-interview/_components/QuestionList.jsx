import { useUser } from '@/app/provider'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import { Loader2Icon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { v4 as uuidv4 } from 'uuid'
import { supabase } from '@/services/supabaseClient'
import QuestionListContainer from './QuestionListContainer'
import { Loader2 } from 'lucide-react'



function QuestionList({ formData,onCreateLink }) {

    const [loading, setLoading] = useState(true)
    const [questionList, setQuestionList] = useState()
    const [saveLoading, setSaveLoading] = useState(false)
    const { user } = useUser()
    useEffect(() => {
        if (formData) {

            GenerateQuestionList()

        }
    }, [formData])

    const GenerateQuestionList = async () => {
        setLoading(true)
        try {
            const result = await axios.post('/api/ai-model', {
                ...formData

            })
            const content = result.data.content
            const FINAL_CONTENT = content.replace('```json', '').replace('```', '')
            setQuestionList(JSON.parse(FINAL_CONTENT)?.interviewQuestions)
            setLoading(false)
        }
        catch (e) {
            toast('Server Error Try Again!')
            setLoading(false)

        }
    }

    const onFinish = async () => {
        setSaveLoading(true)
        const interview_id = uuidv4()
        const { data, error } = await supabase
            .from('interviews')
            .insert([
                {
                    ...formData,
                    questionList: questionList,
                    userEmail: user?.email,
                    interview_id: interview_id
                },
            ])
            .select()

            setSaveLoading(false)
        
            onCreateLink(interview_id)
                
            
    }


    return (
        <div>
            {loading && <div className='p-5 bg-blue-50 rounded-xl border-primary flex gap-5 items-center border '>
                <Loader2Icon className='animate-spin' />
                <div >
                    <h2 className='font-medium'>Generating Interview Question</h2>
                    <p className='text-primary'>Our AI is cafting personailized question hold on... </p>
                </div>
            </div>
            }
            {questionList?.length > 0 &&
                <div>
                    <QuestionListContainer questionList = {questionList}/>
                </div>
            }
            <div className='flex gap-5 justify-end mt-5'>
                <Button onClick={() => onFinish()} disabled={saveLoading}>
                    {saveLoading && <Loader2 className='animate-spin' />}
                    Create Interview Link & Finish
                </Button>
            </div>
        </div>
    )
}

export default QuestionList