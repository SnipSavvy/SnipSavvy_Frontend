"use client"
import React from "react"
interface ButtonProps{
    description: string
}
export function Button({description}: ButtonProps) {
    function handler(){
        console.log("clicked")
    }
    return <button onClick={handler} className="px-3 py-2 bg-white text-black font-semibold rounded-3xl glow-gradient">{description}</button>
}