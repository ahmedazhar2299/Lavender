import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Product from "../../components/Product/Product";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";
import {CircularProgress } from '@mui/material'

const getProducts = (maleItems) => {
  return (
    <div className="my-10 lg:mx-32 vsm:mx-5 h-full">
      <div className="">
        <h1 className="text-6xl font-bold mb-5 vsm:text-center sm:text-left">
          Mens' Wear
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
        {
          maleItems.length===0 ? <div className="my-40" ><CircularProgress color="inherit" /></div> :
          maleItems.map(item=> {
           return <Product id={item._id} key={item._id} title={item.title} price={item.price}  image={item.profilePicture}/>
          })
        }
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
export default function Men() {
  const [maleItems,setMaleItems] = useState([]);
  useEffect(()=>{
    const getMaleProducts= async ()=>{
      let clothes = []
         clothes = await axios.get('/product/male')
        setMaleItems(clothes)
    }
    getMaleProducts();
    },[maleItems])


  return (
    <>
      <Topbar />
      <Navbar />
      {getProducts(maleItems.data?maleItems.data : [])}
      <div className="bottom-0 relative w-full">
        <Services />
        <Footer />
      </div>
    </>
  );
}
