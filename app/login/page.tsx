import LoginForm from '@/ui/components/LoginForm'
import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex'>
      <div className='bg-black w-[45%] h-screen flex items-center justify-center'>
        <Image src={'/static/logo.jpg'} alt='company logo' className='rounded-xl' width={180} height={100} />
      </div>
      <div className='w-[55%] flex flex-col items-center justify-center bg-slate-100 gap-2'>
        <div className='bg-white w-1/2 rounded-xl text-center p-6'>
          <h2 className='text-2xl font-bold'>Login</h2>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
