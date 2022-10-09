import React from 'react'

export default function Product() {
  return (

        <div className="max-w-sm mr-5 cursor-pointer overflow-hidden">
          <img
          className='hover:scale-105'
            src="https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fproduct%2F0364326148_1_1_1.jpg&w=1920&q=75"
            alt=""
          />
          <p className="font-bold mt-5 mb-2 hover:underline">White Tee</p>
          <p className="text-slate-500 mb-5">$ 40.00</p>
        </div>
  )
}
