"use client"

import Image from "next/image"

const LoginForm = () => {
  return (
    <div className="flex flex-col gap-3 p-4 items-center">
      <input type="text" className='text-sm border w-4/5 border-slate-500 rounded-[5px] p-3' placeholder="Enter your email/username" />
      <input type="text" className='border border-slate-500 w-4/5 rounded-[5px] p-3 text-sm' placeholder="Enter your password" />
      <button className="bg-slate-500 mt-2 text-white w-fit p-2 rounded font-semibold px-4">Submit</button>
      <div className="flex gap-2">
        <button><Image src={'https://pbs.twimg.com/profile_images/1605297940242669568/q8-vPggS_400x400.jpg'} alt="google" width={40} height={70} /></button>
        <button><Image src={'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png'} alt="google" width={40} height={70} /></button>
      </div>
    </div>
  )
}

export default LoginForm