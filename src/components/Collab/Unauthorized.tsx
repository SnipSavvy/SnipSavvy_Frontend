'use client'
import React, {useEffect} from 'react'
import {redirect} from 'next/navigation'

const Unauthorized = () => {
    useEffect (()=> {
        setTimeout(redirect('/'), 15000)
    })
    return (
        <div className='text-white text-6xl flex justify-center items-center translate-y-[50vh]'>
            <div className=''>
                Sorry, you are not authorized to access this page.
            </div>
        </div>
    )
}

export default Unauthorized