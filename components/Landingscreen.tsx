'use client'
 
import { useRouter } from 'next/navigation'

import React from 'react'



function Landingscreen() {
  const router = useRouter()
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/Digital transformation-rafiki.png" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Draw your signature
          </h1>
          <p className="mb-8 leading-relaxed">DocSign allows users to draw their signatures and save them as images. It provides an interactive canvas where users can use their mouse or touchscreen to create their unique signatures</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => router.push('/homepage')}>Get start</button>
            
          </div>
        </div>
      </div>
    </section>

  )
}

export default Landingscreen