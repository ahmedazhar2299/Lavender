import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";
import { useNavigate } from "react-router-dom";
import Summary from "../../components/Order Summary/Summary";
import Cartlist from "../../components/Cart List/Cartlist";
import { useSelector } from "react-redux";
export default function Cart() {
  let navigate = useNavigate();
  const [cartFail,setCartFail] = useState("");
  const totalPrice = useSelector(state=> state.fetchTotal.total)
  const failure = ` p-3 mb-5 text-red-500 w-full text-center `
  const successs = ` p-3 mb-5 text-green-500 w-full text-center`
  return (
    <div>
      <Topbar />
      <Navbar />
      <div className="my-20">
        <div className="text-center">
          <span
            onClick={() => navigate("/")}
            className="text-sm font-bold hover:underline cursor-pointer mr-2"
          >
            Home
          </span>
          <span className="text-sm mr-2 ">/</span>
          <span className="text-sm text-slate-500">SHOPPING CART</span>
          <h1 className="my-10 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">
            SHOPPING CART
          </h1>
        </div>
        <div className="flex flex-wrap lg:px-20 justify-center ">
          <Cartlist/>

          <div className="lg:max-w-sm vsm:max-w-2xl vsm:mt-10 lg:mt-0 lg:mr-10 w-full">
            <Summary />
          </div>
        </div>
        <div className="text-center mt-20 ">
        <p className={cartFail === "" ? "" : cartFail === false ? successs : failure}>{cartFail === "" ? "" : cartFail === true ? "Failed to Checkout" : "Checkout Successfull"}</p>
          <button onClick={()=>{
            totalPrice!=0 ? navigate("/checkout") : setCartFail(true)
          }} className="focus:outline-none border-2 border-black border-solid w-30 py-2 px-10 text-sm font-semibold hover:text-white hover:bg-black"  >
            Proceed to Checkout <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
}
