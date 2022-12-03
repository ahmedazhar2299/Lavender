import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";
import { useParams , useNavigate } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import OrderDetail from "../../components/Order Detail/OrderDetail";
export default function ViewOrder() {
  let navigate = useNavigate();
  const { id } = useParams();
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
          <span className="text-sm text-slate-500">Orders</span>
          <h1 className="my-10 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">
            Your Orders
          </h1>
        </div>
        <div className="flex flex-wrap lg:px-20 justify-center ">
          <OrderDetail orderId = {id} />
          
          <div className="lg:max-w-sm vsm:max-w-2xl vsm:mt-10 lg:mt-0 lg:mr-10 w-full">
            <Profile />
          </div>
          
        </div>
        
      </div>
      <Services />
      <Footer />
    </div>
  );
}
