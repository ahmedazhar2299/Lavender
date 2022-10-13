import React from "react";

export default function InvoiceAddress() {
  return (
    <div>
        
        <h1   style={{ backgroundColor: "#F8F9FA" }} className="text-lg font-medium py-4 px-5 mt-5"> Address</h1>
      <form action="">
        <div className="flex flex-wrap justify-between vsm:px-10 md:px-0">
          <div className="md:max-w-xs w-full">
            <label htmlFor="full-name" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Full Name</label>
            <input placeholder="ahmed" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="full-name" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="email" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Email Address</label>
            <input placeholder="ahmed@gmail.com" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="email" name="email" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="street" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Street</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="street" id="" placeholder="123 Main St." />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="city" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">City</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="city" id="" placeholder="City" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="province" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Province</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="province" placeholder="Province" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="zip" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">ZIP</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="zip" placeholder="Postal Code" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="phone-number" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Phone Number</label>
            <input className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="phone-number" placeholder="Phone Number" id=""  />
          </div>
        </div>
      </form>
    </div>
  );
}
