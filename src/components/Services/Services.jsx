import React from "react";

export default function Services() {
  return (
    <div
      className="p-12 flex flex-wrap w-full justify-center items-center"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="flex m-4 max-w-xs w-full">
        <i className="text-3xl mr-5 fa-solid fa-truck"></i>
        <div>
          <p className="font-bold">Free Shipping & return</p>
          <p>Free Shipping over $300</p>
        </div>
      </div>
      <div className="flex m-4 max-w-xs w-full">
        <i className="text-3xl mr-5 fa-solid fa-dollar-sign"></i>
        <div>
          <p className="font-bold">Money back guarantee</p>
          <p>30 Days Money Back Guarantee</p>
        </div>
      </div>
      <div className="flex m-4 max-w-xs w-full">
        <i className="text-3xl mr-5 fa-solid fa-certificate"></i>
        <div>
          <p className="font-bold">Best prices</p>
          <p>Always the best prices</p>
        </div>
      </div>
      <div className="flex m-4 max-w-xs w-full">
        <i className="text-3xl mr-5 fon fa-solid fa-phone"></i>
        <div>
          <p className="font-bold">020-800-456-747</p>
          <p>24/7 Available Support</p>
        </div>
      </div>
    </div>
  );
}
