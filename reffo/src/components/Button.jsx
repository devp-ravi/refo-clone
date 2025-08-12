import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


function Button({title ="Get Started"}) {
  return (
    <div className='bg-zinc-100 text-black flex min-w-40 items-center gap-4 py-2 px-6 text-sm font-semibold rounded-full'>
      <span >{title}</span>
      <IoIosReturnRight  className='mt-1'/>

    </div>
  )
}

export default Button