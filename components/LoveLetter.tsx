'use client'

import { useState } from 'react'
import Envelope from './Envelope'
import Letter from './Letter'

export default function LoveLetter() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  return (
    <div className="relative">
      {!isEnvelopeOpen && <Envelope onOpen={() => setIsEnvelopeOpen(true)} />}
      {isEnvelopeOpen && <Letter />}
    </div>
  )
}

