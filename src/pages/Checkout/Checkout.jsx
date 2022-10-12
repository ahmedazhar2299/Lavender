import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";
import { useNavigate } from "react-router-dom";
import Summary from "../../components/Order Summary/Summary";
import CheckoutSteps from "../../components/Checkout Steps/CheckoutSteps";
import { useState } from "react";
import { useEffect } from "react";
const processes = {
    "0" : "address",
    "1" : "delievery",
    "2" : "payment",
    "3" : "order",
  }
  const buttonText = {
    "0" : "Choose Delievery Method",
    "1" : "Choose Payment Method",
    "2" : "Continue to Order Review",
    "3" : "Place Order",
  }
export default function Checkout() {
  const [countSteps, setcountSteps] = useState(0);
  useEffect(() => {
    if (countSteps === 4) setcountSteps(0);
  }, [countSteps]);
  let navigate = useNavigate();
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
          <span className="text-sm text-slate-500">CHECKOUT</span>
          <h1 className="my-10 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">
            CHECKOUT
          </h1>
        </div>
        <div className="flex flex-wrap lg:px-20 justify-center ">
          <CheckoutSteps current={`${processes[countSteps]}`} />

          <div className="lg:max-w-sm vsm:max-w-2xl vsm:mt-10 lg:mt-0 lg:mr-10 w-full">
            <Summary />
          </div>
        </div>
        <div className="text-center mt-20 ">
          <button
            onClick={() => setcountSteps(countSteps + 1)}
            className="focus:outline-none border-2 border-black border-solid w-30 py-2 px-10 text-sm font-semibold hover:text-white hover:bg-black"
          >
            {`${buttonText[countSteps]}`} <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
}
