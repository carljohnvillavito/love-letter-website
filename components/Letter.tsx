'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const messages = [
  "Hi love:)",
  "Kamusta naman akong palangga? Is she getting better every single day ba?",
  "Well i hope so... i need my lalove to be strong and independent habang wala pa iyahang night in shining agtang hahaha.",
  "Pero enough of that silly sht...",
  "I really wanted show you how i love you and i wanna make you safe with me, diko gusto maging bad example satong future self nanong nagbuwag ta or anything...",
  "I just want you to know i still have this same feelings for you, since day one^^",
  "And this is the reason why i made you this website:)",
  "Since wamay maka appreciate aning lowkey nako na talent, I'll just spoil it to you nalang since you wanted it so bad:)",
  "Mupadayon gihapon kog himog ingani nga content in the near future, as long as its for you, i will keep myself motivated:)",
  "And if you ever feel like coming back to this website, pwede kaayo love.",
  "After all, i made this for you:>",
  "I love you langga, unta you really are the one na, unta ikaw najud magpa tunay sako nga you are worth waiting for.",
  "That's all muna love... May our relationship be stronger than bricks and stones...",
  "I love you...❤️",
  "Your's truly, your night in shining agtang."
]

export default function Letter() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const handleNextMessage = () => {
    if (currentMessageIndex === messages.length - 1) {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    } else {
      setCurrentMessageIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <div className="w-4/5 max-w-2xl bg-white border-2 border-pink-400 rounded-lg p-6 shadow-lg">
      <p className="text-lg md:text-xl text-center mb-6 animate-fadeIn">
        {messages[currentMessageIndex]}
      </p>
      <button
        onClick={handleNextMessage}
        className="block mx-auto bg-pink-400 text-white px-4 py-2 rounded-full hover:bg-pink-500 transition-colors duration-300"
      >
        <ArrowRight className="w-6 h-6" />
      </button>
    </div>
  )
}

