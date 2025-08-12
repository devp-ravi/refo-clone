import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";


function Card({width, start, para ,hover="false"} ) {
  return (

        <motion.div  whileHover={{ backgroundColor:hover === "true" && "#7443ff" ,padding: "25px" }} className={`p-5 rounded-xl bg-zinc-800  ${width}  flex flex-col  justify-between min-h-[25rem] `}>
            <div className='first w-full '>
                <div className=' w-full flex justify-between items-center '>
                <h3  className='font-semibold text-sm' >one heading</h3>
                <FaArrowRightLong />

            </div>
            <h2 className='font-semibold py-5 text-2xl mt-5'>whatever heading</h2>

       </div>


       <div className='second w-full mt-3'>
       {start && (
        <>
         <h1 className='text-5xl font-semibold tracking-tight leading-none'>
            Start a project
        </h1>
        <button className='border-[1px] border-zinc-50 mt-5  text-white py-2 px-4 rounded-full text-sm'>Contact Us</button>
        </>
       )}

         {para && ( <>
                <p className='text-sm text-zinc-400 font-medium'>Lorem , consectetur adipiscing elit. Sed do </p>
            </>
)}
            </div>
    </motion.div>
  )
}

export default Card