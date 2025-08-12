import React from 'react'

function Marrqee({images}) {
  return (
    <div className='flex gap-30 mb-14 flex-shrink-0 '>
      {images.map((img, index) => (
        <img src={img} alt={`Marquee ${index}`} key={index} className='h-[2vw] ' />
      ))}
    </div>
  )
}

export default Marrqee