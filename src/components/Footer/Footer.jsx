import React from "react";

export default function Footer() {
  return (
    <footer className="pt-10 pb-2 lg:px-40 vsm:px-0">
      <div className="flex flex-wrap w-full justify-center text-center">
        <div className="md:max-w-xs w-full flex flex-col justify-center items-center">
          <h1 className="font-bold">Be in Touch</h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque
            temporibus.
          </p>
          <form className="border-solid border-b-2 border-black lg:w-full" action="#">
            <input placeholder="Your Email Address" type="text" name="" id="" className="text-slate-500 focus:outline-none w-11/12" />
            <button><i className="fa-solid fa-paper-plane"></i></button>
          </form>
        </div>
        <div  className="md:max-w-xs w-full">
            <h1 className="font-bold">Shop</h1>
            <ul>
                <li className="text-slate-500 hover:underline">For Women</li>
                <li className="text-slate-500 hover:underline">For Men</li>
                <li className="text-slate-500 hover:underline">Stores</li>
                <li className="text-slate-500 hover:underline">Our Blog</li>
                <li className="text-slate-500 hover:underline">Shop</li>
            </ul>
        </div >
        <div className="md:max-w-xs w-full">
            <h1 className="font-bold">Company</h1>
            <ul>
                <li className="text-slate-500 hover:underline">Login</li>
                <li className="text-slate-500 hover:underline">Register </li>
                <li className="text-slate-500 hover:underline">Wishlist</li>
                <li className="text-slate-500 hover:underline">Our Products</li>
                <li className="text-slate-500 hover:underline">Checkouts</li>
            </ul>
        </div>
        <div  className="md:max-w-xs w-full">
            <h1 className="font-bold">Your account</h1>
            <ul>
                 <li className="text-slate-500 hover:underline">Login</li>
                <li className="text-slate-500 hover:underline">Register </li>
                <li className="text-slate-500 hover:underline">Wishlist</li>
                <li className="text-slate-500 hover:underline">Our Products</li>
                <li className="text-slate-500 hover:underline">Checkouts</li>
            </ul>
        </div>


      </div>

      <div className="flex flex-wrap lg:justify-between text-sm mt-10 vsm:justify-center">
        <div className="vsm:mb-5 lg:mb-0">
          <p>© 2022 Your company. All rights reserved.</p>
        </div>
        <ul className="flex flex-wrap justify-left">
          <li className="text-slate-500 hover:underline sm:mr-5 ">Terms & Conditions</li>
          <li className="text-slate-500 hover:underline  sm:mr-5">Privacy & cookies</li>
          <li className="text-slate-500 hover:underline  sm:mr-5">Accessibility</li>
          <li className="text-slate-500 hover:underline">Customer Data Promise</li>
        </ul>
      </div>
    </footer>
  );
}
