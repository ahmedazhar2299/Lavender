import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Product from "../../components/Product/Product";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";

let getProducts = () => {
  return (
    <div className="my-10 lg:mx-32 vsm:mx-5 h-full">
      <div className="">
        <h1 className="text-6xl font-bold mb-5 vsm:text-center sm:text-left">
          Womens' Wear
        </h1>
        <p className="text-slate-500 text-xl mb-20 vsm:text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div className="mb-5 flex flex-wrap sm:justify-between vsm:justify-center">
        <div>
          <span
            style={{ color: "#BCAC76" }}
            className="hover:underline cursor-pointer font-bold mr-3 text-sm"
          >
            Home
          </span>
          <span className="font-bold text-sm">-</span>
          <span className="ml-3 text-slate-600 text-sm">Shop</span>
          <p>
            Showing <span className="font-bold">1-12</span> of{" "}
            <span className="font-bold">158</span> Products
          </p>
        </div>
        <div className="vsm:mt-5 vsm:text-center sm:text-right vsm:w-full sm:w-auto">
          <span className="mr-5 text-slate-500 text-lg font-bold ">
            Sort by
          </span>
          <select
            className="focus:outline-none broder-solid border-2 border-slate-400 font-semibold text-slate-500 p-1"
            name=""
            id=""
          >
            <option value="" className="font-semibold">
              Default
            </option>
            <option value="" className="font-semibold">
              Price-High
            </option>
            <option value="" className="font-semibold">
              Price-Low
            </option>
            <option value="" className="font-semibold">
              Rating
            </option>
          </select>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center">

        <Product src="https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fproduct%2F0364326148_1_1_1.jpg&w=1920&q=75"/>
        <Product src="https://ae01.alicdn.com/kf/H46b0f7e90b0a4937be968e6b6420dd53A.jpg?width=750&height=770&hash=1520" />
        <Product src="https://ae01.alicdn.com/kf/H46b0f7e90b0a4937be968e6b6420dd53A.jpg?width=750&height=770&hash=1520" />
        <Product src="https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fproduct%2F0364326148_1_1_1.jpg&w=1920&q=75" />
        <Product src="https://cdn.cliqueinc.com/posts/83049/casual-style-83049-1584637214442-promo.700x0c.jpg" />
        <Product src="https://cdn.cliqueinc.com/posts/83049/casual-style-83049-1584637214442-promo.700x0c.jpg"/>
        <Product src="https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fproduct%2F0364326148_1_1_1.jpg&w=1920&q=75"/>
      </div>
      <ul className="flex justify-center mt-10">
        <li>
          <i className="fa-solid fa-angle-left hover:font-bold hover:text-black text-slate-500 text-xl mr-3 mt-1 cursor-pointer"></i>
        </li>
        <li className="hover:font-bold hover:text-black text-slate-500 text-xl mr-3 cursor-pointer">
          1
        </li>
        <li className="hover:font-bold hover:text-black text-slate-500 text-xl mr-3 cursor-pointer">
          2
        </li>
        <li className="hover:font-bold hover:text-black text-slate-500 text-xl mr-3 cursor-pointer">
          3
        </li>
        <li className="hover:font-bold hover:text-black text-slate-500 text-xl mr-3 cursor-pointer">
          4
        </li>
        <li>
          <i className="fa-solid fa-angle-right hover:font-bold hover:text-black text-slate-500 text-xl mr-3 mt-1 cursor-pointer"></i>
        </li>
      </ul>
    </div>
  );
};
let DefaultProducts=()=>{
    return (
        <div>
            <h1 className="my-60 text-center sm:text-7xl vsm:text-4xl font-bold">No Product Available</h1>
        </div>
    )
}
export default function Women() {
  return (
    <>
      <Topbar />
      <Navbar />
      {getProducts()}
      <div className="bottom-0 relative w-full">
        <Services />
        <Footer />
      </div>
    </>
  );
}
