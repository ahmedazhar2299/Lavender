import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchItem from "../../api/fetchItem";
export default function Product({ title,price, image,id }) {
  let navigate =useNavigate();
  const dispatch = useDispatch()
  return (
    <div onClick={async (e)=>{
      await fetchItem(id,dispatch)
      navigate(`/item/preview/${id}`)
      window.scrollTo(0, 0);
      }} className="sm:h-96 vsm:h-full max-w-sm mr-5 cursor-pointer sm:mb-24">
      <div className=" h-96 w-96 overflow-hidden">
        <img  className="object-cover w-full h-full hover:scale-105" src={image} alt="" />
      </div>
      <div className="">
      <p className="font-bold mt-5 mb-2 hover:underline">{title}</p>
      <p className="text-slate-500 mb-5">$ {price}</p>
      </div>
      
    </div>
  );
}
