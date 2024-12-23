import LoveLetter from '@/components/LoveLetter'

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-100 flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        <LoveLetter />
      </div>
      <footer className="bg-pink-400 text-white font-bold py-3 text-center">
        <p>For my lovedovie gazelle :&gt;</p>
      </footer>
    </main>
  )
}

