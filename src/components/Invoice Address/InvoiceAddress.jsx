import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import fetchAddress from "../../api/fetchAddress";

export default function InvoiceAddress() {
  const name = useRef();
  const email = useRef();
  const address = useRef();
  const city = useRef();
  const province = useRef();
  const zip = useRef();
  const phone = useRef();
  const dispatch = useDispatch();
  return (
    <div>
        <h1   style={{ backgroundColor: "#F8F9FA" }} className="text-lg font-medium py-4 px-5 mt-5"> Address</h1>
      <form onSubmit={(e)=>{
        e.preventDefault()
        const completeAddress = {
          "name" : name.current.value,
          "email" : email.current.value,
          "completeAddress" : address.current.value,
          "city" : city.current.value,
          "province" : province.current.value,
          "zip" : zip.current.value,
          "phone" : phone.current.value
        }
        fetchAddress(completeAddress, dispatch)
      }} action="">
        <div className="flex flex-wrap justify-between vsm:px-10 md:px-0">
          <div className="md:max-w-xs w-full">
            <label htmlFor="full-name" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Full Name</label>
            <input ref={name} required placeholder="ahmed" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="full-name" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="email" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Email Address</label>
            <input ref={email} required placeholder="ahmed@gmail.com" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="email" name="email" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="street" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Address</label>
            <input ref={address} required className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="street" id="" placeholder="123 Main St." />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="city" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">City</label>
            <input ref={city} required className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="city" id="" placeholder="City" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="province" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Province</label>
            <input ref={province} required className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="province" placeholder="Province" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="zip" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">ZIP</label>
            <input ref={zip} required className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="zip" placeholder="Postal Code" id="" />
          </div>
          <div className="md:max-w-xs w-full">
            <label htmlFor="phone-number" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Phone Number</label>
            <input minLength={11} onChange={()=>{
             if(phone.current.value.length>11){
              phone.current.value = phone.current.value.slice(0,11)
             }
            }} ref={phone} required className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="phone-number" placeholder="Phone Number" id=""  />
          </div>
        </div>
        <button className="focus:outline-none border-2 border-black border-solid w-full py-2 px-10 text-sm font-semibold hover:text-white hover:bg-black mt-10 text-center"  > Save </button>
      </form>
    </div>
  );
}
