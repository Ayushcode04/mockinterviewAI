"use client"
import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'
import { supabase } from '@/services/supabaseClient';

function Login() {

    // Function to handle Google sign-in

    const signinwithGoogle =async() => {
        const {error} = await supabase.auth.signInWithOAuth({
        provider: 'google',
        })
        if (error) {
            console.error('Error signing in with Google:', error.message);
        } 
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex flex-col items-center border rounded-2xl p-8'>
                <Image src={"/logo.png"} alt="logo"
                    width={100}
                    height={100}
                    className='w-[180px]'
                />
                <div className='flex flex-col items-center justify-center mt-8 mb-4 '>
                    <Image
                        src={"/login.png"}
                        alt="login"
                        width={400}
                        height={250}
                        className='w-[400px] h-[250px] object-cover rounded-2xl mb-4'
                    />
                    <h2 className='text-2xl font-bold text-center mt-4'>
                        Welcome to Mock Interview AI
                    </h2>
                    <p>
                        Sign in with Google
                    </p>
                    <Button className="mt-7 w-full"
                    onClick={signinwithGoogle}
                    >Login with Google</Button>
                </div>
            </div>
        </div>
    )
}

export default Login