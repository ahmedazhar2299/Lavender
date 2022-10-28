import React from 'react'

export default function Searchbar() {
  return (
    <div className='w-3/6'>
      <form className='w-full border-solid md:border-b-2 md:border-black' action="#">
        <input style={{"backgroundColor":"#EEECDF"}} placeholder='Search' type="text" className='w-11/12 focus:outline-none text-slate-500 vsm:border-b-2 vsm:border-black md:border-0'  name="" id="" />
        <button style={{"backgroundColor":"#EEECDF"}} className='lg:ml-8 p-0 vsm:text-center vsm:w-full md:w-auto'>
          <div className='vsm:hidden md:inline '>
          <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <p style={{"backgroundColor":"#212529"}} className='md:hidden mt-3 w-11/12 text-white font-bold p-2'>Search</p>
        </button>
      </form>
    </div>
  )
}
