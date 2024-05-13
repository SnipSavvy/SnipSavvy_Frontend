'use client'
import React from "react"
import animationData from '../../../public/Animation - 17130195136721.json'
import Lottie from "lottie-react"

export default function Animate() {
    return (
        <div  className="h-1/4 flex justify-end items-right absolute">
        <Lottie animationData={animationData} className='items-right'/>
        </div>
    )
}