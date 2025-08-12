import React from 'react'

function Stripe({ val }) {
  return (
    <div className='flex items-center justify-between w-[16.66%] border-b border-t border-l border-zinc-600 px-4 py-0'>
      <img src={val.url}  className='w-[8vw] h-[4vw]' />
      <span className='text-lg font-bold'>{val.number}</span>
    </div>
  )
}

export default Stripe