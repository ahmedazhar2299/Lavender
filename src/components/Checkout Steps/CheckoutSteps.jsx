import React from "react";
import { useState } from "react";
import InvoiceAddress from "../Invoice Address/InvoiceAddress";
import DelieveryMethods from "../Delievery Methods/DelieveryMethods";
import Payment from "../Payment/Payment";
import Cartlist from "../Cart List/Cartlist";
export default function CheckoutSteps({current}) {
  return (
    <div className="max-w-2xl lg:mr-2 w-full ">
     {current==="complete" ? "" : <div
        style={{ backgroundColor: "#F8F9FA" }}
        className="text-sm font-medium  flex vsm:flex-col lg:flex-row vsm:text-center lg:text-left justify-between w-full"
      >
        <div className={`${current==="address"?"text-white bg-black" : "text-black"}  px-10 py-4`}>
          <span>Address</span>
        </div>
        <div className={`${current==="delievery"?"text-white bg-black" : "text-black"}  px-10 py-4`}>
          <span>Delivery Method</span>
        </div>
        <div className={`${current==="payment"?"text-white bg-black" : "text-black"}  px-10 py-4`}>
          <span>Payment Method</span>
        </div>
        <div className={`${current==="order"?"text-white bg-black" : "text-black"}  px-10 py-4`}>
          <span>Order Review</span>
        </div>
      </div>}
      {current==="address" ?<InvoiceAddress/>  :""}
      {current==="delievery"?<DelieveryMethods />:""}
      {current==="payment"?<Payment />:""}
      {current==="order"?<div className="mt-10"><Cartlist /></div> :""}
      {current==="complete"?<div className="mt-10"><p className="text-center text-green-500 text-3xl font-bold">Thank you, Your order has been confirmed.</p></div> :""}
    </div>
    
  );
}
