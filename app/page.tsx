import Image from 'next/image'
import { Landingscreen } from '@/components'
import {Header} from '@/components'
import {Footer} from '@/components'

export default function Home() {
  return (
    <main className="overflow-hidden">

      <Header/>
      <Landingscreen/>
      <Footer/>
    
    </main>
  )
}
