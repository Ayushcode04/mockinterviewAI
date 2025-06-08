"use client"
import React from 'react'
import DashboardProvider from './provider'

function DashboardLayout({ children }) {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <DashboardProvider>
                <div className='p-10'>
                {children}
                </div>
            </DashboardProvider>
        </div>
    )
}

export default DashboardLayout