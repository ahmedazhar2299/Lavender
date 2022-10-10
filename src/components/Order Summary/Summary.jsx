import React from 'react'

export default function Summary() {
  return (
    <div className='p-5' style={{ backgroundColor: "#F8F9FA" }}>
      <h1 className='font-semibold mb-5'>Order Summary</h1>
      <p className='text-xs text-slate-500 mb-5'>Shipping and additional costs are calculated based on values you have entered.</p>
      <div className='mb-5 text-sm flex justify-between'>
        <span >Order Subtotal</span>
        <span>$390.00</span>
      </div>
      <hr className='mb-5' />
      <div className='mb-5 text-sm flex justify-between'>
        <span>Shipping and handling</span>
        <span>$10.00</span>
      </div>
      <hr className='mb-5'/>
      <div className='mb-5 text-sm flex justify-between'>
        <span>Tax</span>
        <span>$0.00</span>
      </div>
      <hr className='mb-5'/>
      <div className='mb-5 text-sm flex justify-between'>
        <span>Total</span>
        <span className='font-bold'>$400.00</span>
      </div>


    </div>
  )
}
