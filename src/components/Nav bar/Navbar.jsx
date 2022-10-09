import React from 'react'
import Searchbar from '../Search bar/Searchbar'
import { Link,useNavigate } from "react-router-dom";
export default function Navbar() {
  let navigate =useNavigate();
  return (
    
    <div style={{"background-color":"#EEECDF"}} className='flex pb-5 lg:px-10 md:px-0 md:justify-between vsm:flex-col md:flex-row vsm:justify-center vsm:items-center'>
      <ul className='flex vsm:mb-3 md:mb-0'>
        <li className='font-bold text-xl mr-10 cursor-pointer lg:inline vsm:hidden'>Lavender</li>
        <Link className='mr-5  cursor-pointer hover:font-bold vsm:ml-5 md:ml-2' to="/">Home</Link>
        <Link className='mr-5  cursor-pointer hover:font-bold vsm:ml-5 md:ml-2' to="/category/men">Men</Link>
        <Link className='mr-5  cursor-pointer hover:font-bold vsm:ml-5 md:ml-2' to="/category/women">Women</Link>
      </ul>
      <Searchbar/> 
      <div className='vsm:mt-5 md:mb-0 text-xl inline'>
      <i onClick={()=>navigate('/register')} className="fa-solid fa-user mx-3 cursor-pointer hover:opacity-60"></i>
      <i onClick={()=>navigate('/cart')} className="fa-solid fa-cart-shopping mr-3 relative cursor-pointer hover:opacity-60">
        <span className=' text-sm text-red-900 bg-white rounded-xl w-5 text-center h-auto absolute bottom-4 left-4 hover:border-solid hover:border-red-900 hover:border-2'>1</span>
      </i>
      </div>
    </div>
  )
}
