import './globals.css'
import { Inter } from 'next/font/google'
import EmojiBackground from '@/components/EmojiBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Love Letter for My Lovedovie Gazelle',
  description: 'A lovely digital love letter',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EmojiBackground />
        {children}
      </body>
    </html>
  )
}

