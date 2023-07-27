'use client'
import { Header } from '@/components'
import { Datatable } from '@/components'
import { useRouter } from 'next/navigation'

function Home() {
  const router = useRouter()

  return (
    <main className="overflow-hidden">
      <Header />
      <Datatable />
    </main>
  )
}

export default Home
