'use client'

import { useEffect, useState } from 'react'

export default function EmojiBackground() {
  const [emojis, setEmojis] = useState<JSX.Element[]>([])

  useEffect(() => {
    const emojiList = ['❤️', '😍', '💕', '💖', '💘', '💓', '💗', '💞', '💝', '😘']
    const numberOfEmojis = 50
    const newEmojis = []

    for (let i = 0; i < numberOfEmojis; i++) {
      newEmojis.push(
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            opacity: 0.5,
          }}
        >
          {emojiList[Math.floor(Math.random() * emojiList.length)]}
        </span>
      )
    }

    setEmojis(newEmojis)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] opacity-10">
      {emojis}
    </div>
  )
}

