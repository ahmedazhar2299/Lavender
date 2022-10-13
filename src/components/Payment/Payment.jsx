import React from "react";

export default function Payment() {
  return (
    <div>
        
        <h1   style={{ backgroundColor: "#F8F9FA" }} className="text-lg font-medium py-4 px-5 mt-5"> Credit Card</h1>
      <form action="">
        <div className="flex flex-wrap justify-between vsm:px-10 md:px-0">
          <div className="md:max-w-xs w-full">
            <label htmlFor="full-name-card" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Name on Card</label>
            <input placeholder="Ahmed" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="full-name-card" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="text" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Card Number</label>
            <input placeholder="Card Number" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="email" name="email" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="expiry" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Expiry Date</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="expiry" id="" placeholder="MM/YY" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="cvv" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">CVC/CVV</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="city" id="" placeholder="123" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="province" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">ZIP</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="province" placeholder="123" id="" />
          </div>
        </div>
      </form>
    </div>
  );
}
