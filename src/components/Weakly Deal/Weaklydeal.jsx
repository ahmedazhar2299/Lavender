import React from 'react'

export default function Weaklydeal() {
  return (
    <div style={{"backgroundColor":"#F0E4E4"}} className=' md:overflow-hidden relative md:h-96 w-full' >
      <img className='vsm:hidden md:inline' src="https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fphoto%2Fdeal-plain.jpg&w=1920&q=75" alt="" />
      <div className='md:absolute top-0 left-0 mx-24 my-10'>
        <p className='text-red-500 font-bold mb-2 text-lg vsm:text-center md:text-left'>DEAL OF THE WEEK</p>
        <h1 className='font-bold md:text-4xl vsm:text-2xl mb-3 vsm:text-center md:text-left'>Oversized Denim Jacket</h1>
        <div className='vsm:text-center md:text-left'>
        <p className='inline font-bold text-slate-400 line-through mr-5'>$129.00</p>
        <p className='inline font-bold text-slate-400'>$79.00</p>
        </div>
        
        <button style={{"backgroundColor":"#DC3545"}} className='block p-3 text-white font-bold cursor-default my-2 rounded-md text-sm'>$50 off</button>
        <div className='flex flex-wrap bg-white justify-center items-center shadow-xl mb-5'>
            <div className='max-w-lg my-3 mx-5 text-center'>
                <p className='font-bold '>14</p>
                <p className='text-slate-400 font-bold'>days</p>
            </div>
            <div className='max-w-lg my-3 mx-5 text-center'>
                <p className='font-bold'>23</p>
                <p className='text-slate-400 font-bold'>hours</p>
            </div>
            <div className='max-w-lg my-3 mx-5 text-center'>
                <p className='font-bold'>38</p>
                <p className='text-slate-400 font-bold'>minutes</p>
            </div>
            <div className='max-w-lg my-3 mx-5 text-center'>
                <p className='font-bold'>16</p>
                <p className='text-slate-400 font-bold'>seconds</p>
            </div>
        </div>
        <button style={{"border" : "1px solid #212529"}} className='px-5 py-2 font-bold hover:bg-black hover:text-white vsm:w-full md:w-auto'>SHOP NOW</button>

      </div>
    </div>
  )
}
