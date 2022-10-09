import React from "react";

export default function Product({ src }) {
  return (
    <div className="sm:h-96 vsm:h-full max-w-sm mr-5 cursor-pointer sm:mb-24">
      <div className=" h-full overflow-hidden">
        <img className="hover:scale-105" src={src} alt="" />
      </div>
      <div className="">
      <p className="font-bold mt-5 mb-2 hover:underline">White Tee</p>
      <p className="text-slate-500 mb-5">$ 40.00</p>
      </div>
      
    </div>
  );
}
