import React from "react";
import { useNavigate } from "react-router-dom";
export default function Productdetail() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-wrap-reverse m-5 sn:ml-48 lg:mx-5 justify-center">
      <div className="max-w-xl h-auto md:mr-10 mt-5 flex flex-shrink-0">
        <img
          className="object-contain h-96 w-96"
          src="https://d19m59y37dris4.cloudfront.net/sell/2-0/img/photo/kyle-loftus-596319-detail-1.jpg"
          alt=""
        />
      </div>
      <div className="max-w-xl">
        <div className="text-left">
          <span
            onClick={() => navigate("/")}
            className="text-sm font-bold hover:underline cursor-pointer mr-2"
          >
            Home
          </span>
          <span className="text-sm mr-2">/</span>
          <span
            onClick={() => navigate("/category/women")}
            className="text-sm font-bold hover:underline cursor-pointer mr-2"
          >
            Women
          </span>
          <span className="text-sm mr-2">/</span>
          <span className="text-sm text-slate-500"> Modern Jacket</span>
          <h1 className="my-6 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">
          Modern Jacket
          </h1>
        </div>
        <div>
          <div className="flex justify-between mb-5">
            <p className="text-xl font-bold">$65.00</p>
            <div className="flex flex-nowrap mt-2">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star text-yellow-400"></i>
            </div>
          </div>
          <p className="text-sm text-slate-500 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            dolorum, culpa facilis accusamus praesentium distinctio earum unde
            eveniet ut, adipisci nulla libero blanditiis aspernatur veritatis
            error soluta exercitationem quis? Amet!
          </p>
          <div>
            <form action="#">
              <div className="my-5">
                <h1 className="font-semibold text-lg mb-2">Size</h1>
                <label htmlFor="item-small" className="border-2 border-slate-600 cursor-pointer border-solid text-slate-500 px-3 mr-2 hover:text-white hover:bg-slate-600 font-semibold">Small</label>
                {/* onClick make it active */}
                <input
                  id="item-small"
                  type="radio"
                  name="item-small"
                  className="hidden"
                />
                <label className="border-2 border-slate-600 cursor-pointer border-solid text-slate-500 px-3 mr-2 hover:text-white hover:bg-slate-600 font-semibold" htmlFor="item-medium">Medium</label>
                <input
                  id="item-medium"
                  type="radio"
                  name="item-medium"
                  className="hidden"
                />
                <label className="border-2 border-slate-600 cursor-pointer border-solid text-slate-500 px-3 mr-2 hover:text-white hover:bg-slate-600 font-semibold" htmlFor="item-large">Large</label>
                <input
                  id="item-large"
                  type="radio"
                  name="item-large"
                  className="hidden"
                />
              </div>
              <div className="my-5">
                <h1 className="font-semibold text-lg mb-2">Color</h1>
                <label htmlFor="item-red" className="border-2 border-red-600 cursor-pointer border-solid text-red-500 px-3 mr-2 hover:text-white hover:bg-red-600 font-semibold">Red</label>
                <input id="red" type="radio" name="red" className="hidden" />
                <label htmlFor="item-green" className="border-2 border-green-600 cursor-pointer border-solid text-green-500 px-3 mr-2 hover:text-white hover:bg-green-600 font-semibold">Green</label>
                <input
                  id="green"
                  type="radio"
                  name="green"
                  className="hidden"
                />
                <label htmlFor="item-yellow" className="border-2 border-yellow-600 cursor-pointer border-solid text-yellow-500 px-3 mr-2 hover:text-white hover:bg-yellow-600 font-semibold">Yellow</label>
                <input
                  id="yellow"
                  type="radio"
                  name="yellow"
                  className="hidden"
                />
                <label htmlFor="item-black" className="border-2 border-black cursor-pointer border-solid text-black px-3 mr-2 hover:text-white hover:bg-black font-semibold">Black</label>
                <input
                  id="black"
                  type="radio"
                  name="black"
                  className="hidden"
                />
              </div>
              <div >
                <h1 className="font-semibold text-lg mb-2">Quantity</h1>
                <input className="border-2 border-solid focus:outline-none mb-5 px-3 py-2 placeholder:text-black" type="text" name="" id=""  placeholder="1" /> 
              </div>
              <button className="focus:outline-none border-solid border-2 hover:text-white hover:bg-black border-black py-3 px-10 w-full"> 
              <i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
