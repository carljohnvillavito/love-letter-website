'use client'

import { useState } from 'react'

interface EnvelopeProps {
  onOpen: () => void
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false)

  const handleClick = () => {
    setIsOpening(true)
    setTimeout(onOpen, 1000)
  }

  return (
    <div
      className={`w-72 h-48 bg-pink-400 relative cursor-pointer transition-transform duration-300 ease-in-out ${
        isOpening ? 'animate-openEnvelope' : 'hover:scale-105'
      }`}
      onClick={handleClick}
    >
      <div
        className={`w-0 h-0 border-l-[144px] border-r-[144px] border-t-[96px] border-l-transparent border-r-transparent border-t-pink-500 absolute top-0 left-0 z-10 transition-transform duration-500 ease-in-out ${
          isOpening ? 'transform rotate-x-180' : ''
        }`}
      ></div>
      <div
        className={`w-[264px] h-[168px] bg-white absolute top-[12px] left-[12px] z-0 transition-transform duration-500 ease-in-out ${
          isOpening ? 'transform -translate-y-24' : ''
        }`}
      ></div>
    </div>
  )
}

