import React from 'react'

export default function Category() {
  return (
    <div style={{"backgroundColor":"#F8F9FA"}} className='flex w-full lg:py-5 md:px-20 md:py-5 lg:px-60 vsm:flex-col lg:flex-row justify-center items-center'>
      <div className='lg:mr-5 lg:mb-0 vsm:mr-0 vsm:mb-5 hover:opacity-75 overflow-hidden lg:w-4/12 vsm:w-6/12'>
        <img className="hover:scale-105 cursor-pointer" src="https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fproduct%2Fcategory-women.jpg&w=1080&q=75" alt="" />
        <button style={{"backgroundColor":"#212529"}} className="text-white font-bold px-5 py-3 w-full md:text-3xl">Women</button>
      </div>
      <div className='lg:mr-5 lg:mb-0 vsm:mr-0 vsm:mb-5 hover:opacity-75 overflow-hidden lg:w-4/12 vsm:w-6/12'>
        <img className="hover:scale-105 cursor-pointer" src="https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fproduct%2Fcategory-men.jpg&w=1080&q=75" alt="" />
        <button style={{"backgroundColor":"#212529"}} className="text-white font-bold px-5 py-3 w-full md:text-3xl">Men</button>
      </div>

    </div>
  )
}
