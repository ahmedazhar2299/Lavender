import React from 'react'
import Createreview from '../../components/Create Review/Createreview';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Nav bar/Navbar';
import Productdetail from '../../components/Product Detail/Productdetail';
import Review from '../../components/Review/Review';
import Services from '../../components/Services/Services';
import Topbar from '../../components/Top-bar/Topbar';


 
export default function Itemdetail() {
    
  return (
    <div>
    <Topbar/>
  <Navbar/>
 <Productdetail/>
 <div className='mb-40 lg:px-40 vsm:px-10 '>
    <div className=''>
    <h1 className='font-semibold mb-5 text-lg'>Reviews</h1>
    <hr className=' border-black'/>
    </div>
   <Review/>
   <Review/>
   <Review/>
   <Review/>
   <Review/>
   <Createreview/>
 </div>
  <Services/>
  <Footer/>
    </div>
  )
}
