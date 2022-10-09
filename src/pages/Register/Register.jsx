import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate =useNavigate();
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="my-20">
        <div className="text-center">
          <span onClick={()=>navigate('/')} className="text-sm font-bold hover:underline cursor-pointer mr-2">
            Home
          </span>
          <span className="text-sm mr-2">/</span>
          <span className="text-sm text-slate-500">Customer Zone</span>
          <h1 className="my-10 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">CUSTOMER ZONE</h1>
        </div>
        <div className="flex flex-wrap lg:px-20 justify-center">
          <div className="max-w-lg lg:mr-10 w-full">
            <h3
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5"
            >
              LOGIN
            </h3>
            <p className="ml-5 my-5 font-medium">Already our Customer?</p>
            <p className="text-sm text-slate-500 ml-5 my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ipsum dicta nemo totam. Pariatur natus expedita, dolorum
              cupiditate distinctio voluptas voluptate, dicta quod inventore
              quibusdam aliquam aspernatur neque fugiat corrupti?
            </p>
            <hr className="ml-5 my-5 border-solid border-slate-300 border-1" />
            <form className="ml-5 mb-10" action="#">
              <label className="text-slate-500" htmlFor="email">
                Email
              </label>
              <input
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="email"
                required
                name="email"
              />
              <label className="text-slate-500" htmlFor="password">
                Password
              </label>
              <input
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="password"
                required
                name="password"
              />
              <button className="text-center w-full border-2 border-solid border-black focus:outline-none py-2 font-bold hover:bg-black hover hover:text-white">
                Log In
              </button>
            </form>
          </div>

          <div className="max-w-lg mr-10 w-full">
            <h3
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5"
            >
              NEW ACCOUNT
            </h3>
            <p className="ml-5 my-5 font-medium">Not our registered customer yet?</p>
            <p className="text-sm text-slate-500 ml-5 my-5">
            With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!
            </p>
            <hr className="ml-5 my-5 border-solid border-slate-300 border-1" />
            <form className="ml-5 mb-10" action="#">
            <label className="text-slate-500" htmlFor="name">
                Name
              </label>
              <input
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="text"
                required
                name="name"
              />
              <label className="text-slate-500" htmlFor="email">
                Email
              </label>
              <input
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="email"
                required
                name="email"
              />
              <label className="text-slate-500" htmlFor="password">
                Password
              </label>
              <input
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="password"
                required
                name="password"
              />
              <button className="text-center w-full border-2 border-solid border-black focus:outline-none py-2 font-bold hover:bg-black hover hover:text-white">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}
