"use client"
import { supabase } from '@/services/supabaseClient'
import React, { useEffect, useState} from 'react'
import { UserDetailContext } from '@/context/UserDetailContext'
import { useContext } from 'react'


function Provider({ children }) {

    const [user, setUser] = useState()

    useEffect(() => {
        CreateNewUser()

    }, [])

    const CreateNewUser = () => {
        supabase.auth.getUser().then(async ({ data:{user}}) => {

            let { data: Users, error } = await supabase
                .from('Users')
                .select("*")
                .eq('email', user?.email)
            console.log(Users);

            if (Users?.length == 0) {
                const { data, error } = await supabase.from('Users')
                    .insert([
                        {
                            name:user?.user_metadata?.name,
                            email:user?.email,
                            picture:user?.user_metadata?.picture,
                        }
                    ])
                .select()
                console.log(data);
                setUser(data)
                setUser(data[0])
                return
            }
            setUser(Users[0])
        })
    }

    return (
        <UserDetailContext.Provider value={{ user, setUser }}>
            <div>{children}</div>
        </UserDetailContext.Provider>
    )
}

export default Provider

export const useUser = () => {
    const context = useContext(UserDetailContext);
    return context;
}