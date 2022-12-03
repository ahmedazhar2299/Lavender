import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Summary() {
  const totalPrice = useSelector(state=> state.fetchTotal.total)
  return (
    <div className='p-5' style={{ backgroundColor: "#F8F9FA" }}>
      <h1 className='font-semibold mb-5'>Order Summary</h1>
      <p className='text-xs text-slate-500 mb-5'>Shipping and additional costs are calculated based on values you have entered.</p>
      <div className='mb-5 text-sm flex justify-between'>
        <span >Order Subtotal</span>
        <span>${totalPrice}</span>
      </div>
      <hr className='mb-5' />
      <div className='mb-5 text-sm flex justify-between'>
        <span>Shipping and handling</span>
        <span>${totalPrice===0?0:10}</span>
      </div>
      <hr className='mb-5'/>
      <div className='mb-5 text-sm flex justify-between'>
        <span>Tax</span>
        <span>${totalPrice===0?0:5}</span>
      </div>
      <hr className='mb-5'/>
      <div className='mb-5 text-sm flex justify-between'>
        <span>Total</span>
        <span className='font-bold'>${totalPrice===0?0:totalPrice+10+5}</span>
      </div>


    </div>
  )
}
