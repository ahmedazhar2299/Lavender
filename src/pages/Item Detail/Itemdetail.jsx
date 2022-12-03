import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import Createreview from '../../components/Create Review/Createreview';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Nav bar/Navbar';
import Productdetail from '../../components/Product Detail/Productdetail';
import Review from '../../components/Review/Review';
import Services from '../../components/Services/Services';
import Topbar from '../../components/Top-bar/Topbar';


 
export default function Itemdetail() {
  const product = useSelector(state=> state.fetchItem.Item)
  const [reviews,setReview] = useState([]);
  useEffect(()=>{
  const fetchReviews = async()=>{
    let list = await axios.get(`/product/${product._id}/reviews`)
    setReview(list.data?list.data : [])
  }
  fetchReviews()
  },[reviews])
  
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
    {reviews.length===0 ? "" : reviews.map(review=>{
      return  <Review userId={review.userid} userName = {review.name} description = {review.description} rating ={review.rating} />
    })}
   <Createreview/>
 </div>
  <Services/>
  <Footer/>
    </div>
  )
}
