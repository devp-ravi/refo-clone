import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div className='py-6 max-w-screen-xl mx-auto flex items-center gap-12 justify-between border-b-1 border-zinc-700'>
        <div className="nav_first flex gap-12">
          <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="refokus logo" />
        <div className="links flex gap-6 font-['Satoshi'] mt-1 ">
           {
            ["Home", "Work", "Culture","", "News"].map((item, index) => (
                item.length === 0 ? <span className='w-[2px] h-5 bg-zinc-700'></span> :
              <a key={item} className='text-sm items-center flex gap-1  ' href="#">
                {index === 1 && (<span style={{boxShadow:"0 0 0.45em #00FF19"}}  className='bg-green-500 w-1 h-1 rounded-full inline-block '></span> )}
                {item}
              </a>
            ))
           }
        </div> 
        </div>
        <div className="nav_second">
          <Button/>


          
        </div>
    </div>
  )
}

export default Navbar