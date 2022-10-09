import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";
import { useNavigate } from "react-router-dom";
export default function Cart() {
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
          <span className="text-sm text-slate-500">SHOPPING CART</span>
          <h1 className="my-10 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">
            SHOPPING CART
          </h1>
        </div>
        <div className="flex flex-wrap lg:px-20 justify-center">
          <div className="max-w-2xl mr-10 w-full">
            <h3
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5"
            ></h3>
          </div>
          <div className="max-w-md mr-10 w-full">
            <h3
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5"
            ></h3>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </div>
  );
}
