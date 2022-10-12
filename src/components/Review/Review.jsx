import React from 'react'

export default function Review() {
  return (
    <div className='flex flex-nowrap mt-5 '>
      <div className='rounded-full border-2 p-3 w-28 h-28 text-center flex items-center justify-center mr-10 flex-shrink-0'>
        <img className='rounded-full w-20 h-20 object-contain' src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-596319-detail-1.jpg" alt="" />
      </div>
      <div>
        <h1>Han Solo</h1>
            <div className='flex mt-2'>
            <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star text-yellow-400"></i>
            </div>
        <p className='text-sm mt-5 text-slate-500'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p>
        <hr className='mt-10'/>
      </div>
    </div>
  )
}
