import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-lg mx-auto py-10 gap-20 flex  '>
            <div className='first basis-1/2    '><h3 className='text-[10rem]  font-semibold leading-none tracking-tight  '>refokus.</h3></div>
            <div className='sec  basis-1/2 flex gap-5'>
                <div className='basis-1/3'>
                    <h3 className='text-zinc-400 mb-10' >Socials</h3>
                    {["Instagram", "Twitter (X?)","LinkedIn"].map((item , i)=><a className='text-zinc-600 hover:text-zinc-400 transition-colors flex mb-2 '  key={i}>{item}</a>)}
                </div>
                 <div className='basis-1/3 '>
                    <h3 className='text-zinc-400  mb-10'>Socials</h3>
                    {["Instagram", "Twitter (X?)","LinkedIn"].map((item , i)=><a className='text-zinc-600 hover:text-zinc-400 transition-colors flex mb-2 '  key={i}>{item}</a>)}
                </div>
                <div className='basis-2/3 flex flex-col items-end  gap-5 text-right  '>
                    <p>Refokuys is a pioneering digital agency driven by design and empowered by technology.</p>
                    <img  src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
                     alt="footer_img" />
                </div>
            </div>
        </div>

        <div className='max-w-screen-lg mx-auto py-5  flex  items-center gap-5'>
            {
               ["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((item, i) => (
                   <a className='text-zinc-600 hover:text-zinc-400 transition-colors flex mb-2 ' key={i}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Footer