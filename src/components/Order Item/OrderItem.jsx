import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderItem({orderId,date,total}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-32 pl-5 pr-10 py-5 w-full">
        <p className=" font-bold  w-40">#{orderId}</p>
        <p className="ml-5 w-40">{date}</p>
        <p className="-ml-1 w-40">${total}</p>
        <p className="ml-5 w-40">Being Prepared</p>
        <button onClick={(e)=>{
        navigate(`/order/${orderId}`)
        e.preventDefault();
        }} className="text-sm focus:outline-none border-solid border-black border-2 px-3 hover:bg-black hover:text-white">View</button>
      </div>
    </>
  );
}
