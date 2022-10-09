import React from 'react'

export default function Searchbar() {
  return (
    <div className='w-3/6 vsm:hidden md:inline'>
      <form className='w-full border-solid border-b-2 border-black' action="#">
        <input style={{"backgroundColor":"#EEECDF"}} placeholder='Search' type="text" className='w-11/12 focus:outline-none text-slate-500'  name="" id="" />
        <button style={{"backgroundColor":"#EEECDF"}} className='lg:ml-8 p-0'>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  )
}
