import React from 'react'

export default function Address({username,email,completeAddress,city,province,zip,phone}) {
  return (
    <div className='p-5 mt-5' style={{ backgroundColor: "#F8F9FA" }}>
    <h1 className=' font-bold mb-5'>Shipping Address</h1>
      <p className='text-sm font-bold'>{username}</p>
      <p className='text-sm'>{phone}</p>
      <p className='text-sm'>{email}</p>
      <p className='text-sm'>{completeAddress}</p>
      <p className='text-sm'>{city}</p>
      <p className='text-sm'>{province}</p>
      <p className='text-sm'>{zip}</p>
    </div>
  )
}
