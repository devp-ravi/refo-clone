import React from 'react'
import Button from './Button'

function Product({val,mover,count}) {
  return (
    <div className='w-full py-20  text-white'>
        <div onMouseEnter={() => mover(count)} className='max-w-screen-lg mx-auto flex justify-between items-center'>
            <h1 className='text-6xl font-medium capitalize'>{val.title}</h1>


            <div className="sec w-1/3 ">
                 <p className='mb-10'  >{val.description}</p>  

            <div className="btns flex gap-5 items-center ">
               {val.live && <Button  title='Live Preview'  />}
               {val.case && <Button title='Case Study' />}
            </div>
            </div>
        </div>
       
        
    </div>
  )
}

export default Product