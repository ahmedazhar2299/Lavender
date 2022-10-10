import React from "react";

export default function Cartitem() {
  return (
    <>
      <div className="flex w-full p-5">
        <div className="flex mr-5">
          <div className="w-20 mr-3">
            <img
              src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/product/product-square-serrah-galos-494312-unsplash.jpg"
              alt=""
            />
          </div>

          <div className=" whitespace-nowrap">
            <h1 className="font-semibold text-sm">SKULL TEE</h1>
            <div >
              <span className="text-xs text-slate-500">Size : </span>
              <span className="text-xs text-slate-500 ">Large</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 ">Color : </span>
              <span className="text-xs text-slate-500 ">Green</span>
            </div>
          </div>
        </div>
        <div className="my-5 mr-28 whitespace-nowrap">
          <p className="text-sm">$65.00</p>
        </div>
        <div className="mr-28 my-5 whitespace-nowrap">
          <button className="focus:outline-none">-</button>
          <input
            className="border-2 border-solid focus:outline-none w-20 mx-2"
            type="text"
          />
          <button className="focus:outline-none">+</button>
        </div>
        <div className="my-5 whitespace-nowrap">
          <p className="text-sm">$260.00</p>
        </div>

          <button className="focus:outline-none hover:text-red-500 relative bottom-12 left-3">
          <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
      </div>
      <hr />
    </>
  );
}
