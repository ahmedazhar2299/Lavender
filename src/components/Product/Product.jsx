import React from "react";
import { useNavigate } from "react-router-dom";
export default function Product({ src }) {
  let navigate =useNavigate();
  return (
    <div onClick={()=>navigate('/item/preview')} className="sm:h-96 vsm:h-full max-w-sm mr-5 cursor-pointer sm:mb-24">
      <div className=" h-full overflow-hidden">
        <img  className="hover:scale-105" src={src} alt="" />
      </div>
      <div className="">
      <p className="font-bold mt-5 mb-2 hover:underline">White Tee</p>
      <p className="text-slate-500 mb-5">$ 40.00</p>
      </div>
      
    </div>
  );
}
