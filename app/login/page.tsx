import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex'>
      <div className='bg-black w-1/2 h-screen flex items-center justify-center'>
        <Image src={'/static/logo.jpg'} alt='company logo' className='rounded-xl' width={180} height={100}/>
      </div>
      <div className='w-1/2 flex flex-col items-center justify-center bg-slate-100'>
        <h2 className='text-2xl font-bold'>Login</h2>
        <input type="text" className='border border-black px-2 py-0.5' />
      </div>
    </div>
  )
}
