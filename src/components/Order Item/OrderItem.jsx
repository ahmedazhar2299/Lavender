import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderItem() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex gap-32 pl-5 pr-10 py-5 ">
        <p className=" font-bold ">#1735</p>
        <p className="ml-5">22/6/2017</p>
        <p className="-ml-1">$150.0</p>
        <p className="ml-5">Being Prepared</p>
        <button onClick={(e)=>{
        navigate('/order/1')
        e.preventDefault();
        }} className="text-sm focus:outline-none border-solid border-black border-2 px-3 hover:bg-black hover:text-white">View</button>
      </div>
    </>
  );
}
