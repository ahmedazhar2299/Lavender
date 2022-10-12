import React from "react";
import { useState } from "react";
import InvoiceAddress from "../Invoice Address/InvoiceAddress";

export default function CheckoutSteps({current}) {
    console.log(current)
  return (
    <div className="max-w-2xl lg:mr-2 w-full ">
      <div
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
      </div>
      {current==="address" ?<InvoiceAddress/>  :""}
      
    </div>
    
  );
}
