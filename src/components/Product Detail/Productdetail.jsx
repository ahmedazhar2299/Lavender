import { CircularProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Productdetail() {

  const Quantity = useRef()
  const [size,setSize] = useState("")
  const [color,setColor] = useState("")
  const [cartFail,setCartFail] = useState("")
  const failure = `border-2 p-3 mb-5 border-red-500 text-red-500 w-full text-center `
  const successs = `border-2 p-3 mb-5 border-green-500 text-green-500 w-full text-center`
  const selectColor  = (e)=>{
    e.preventDefault();
    setColor(e.target.innerText)
  }

  const selectSize  = (e)=>{
    e.preventDefault();
    setSize(e.target.innerText)
  }

  const addItemToCart = async(e)=>{
    e.preventDefault();
    if(color!=="" && size!=="" && Quantity.current.value!="0"){
      try {
        const newCartItem = {
          "productId": product._id,
          "quantity": Quantity.current.value,
          "description": product.description,
          "price": product.price,
          "color" : color,
          "size" : size
      }
        await axios.post(`/cart/add`, newCartItem)
        setSize("")
        setColor("")
        Quantity.current.value = "0";
        setCartFail(false)
    } catch (err) {
      setCartFail(true)
    }
    }
    else{
      setCartFail(true)
    }
  }


  let navigate = useNavigate();
  const product  = useSelector(state => state.fetchItem.Item)
  return  (
    <div className="flex flex-wrap-reverse m-5 sn:ml-48 lg:mx-5 justify-center">
      <div className="max-w-xl h-auto md:mr-10 mt-5 flex flex-shrink-0">
        <img
          className="object-contain h-96 w-96"
          src={product.profilePicture}
          alt=""
        />
      </div>
      <div className="max-w-xl">
        <div className="text-left">
          <span
            onClick={() => navigate("/")}
            className="text-sm font-bold hover:underline cursor-pointer mr-2"
          >
            Home
          </span>
          <span className="text-sm mr-2">/</span>
          <span
            onClick={() => navigate("/category/women")}
            className="text-sm font-bold hover:underline cursor-pointer mr-2"
          >
            {product.category}
          </span>
          <span className="text-sm mr-2">/</span>
          <span className="text-sm text-slate-500"> {product.title}</span>
          <h1 className="my-6 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">
          {product.title}
          </h1>
        </div>
        <div>
          <div className="flex justify-between mb-5">
            <p className="text-xl font-bold">${product.price}</p>
            <div className="flex flex-nowrap mt-2">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star text-yellow-400"></i>
            </div>
          </div>
          <p className="text-sm text-slate-500 mb-5">
          {product.description}
          </p>
          <div>
            <form onSubmit={addItemToCart} action="#">
              <div className="my-5">
                <h1 className="font-semibold text-lg mb-2">Size</h1>
                <label onClick={selectSize } htmlFor="item-small" className={`border-2 ${size==="Small" ? "bg-green-100 border-green-700" : ""}  cursor-pointer border-solid py-1 text-slate-500 px-3 mr-2  hover:bg-green-100  hover:border-green-700`}>Small</label>
                {/* onClick make it active */}
                <input
                  id="item-small"
                  type="radio"
                  name="item-small"
                  className="hidden"
                />
                <label onClick={selectSize } htmlFor="item-medium" className={`border-2 ${size==="Medium" ? "bg-green-100 border-green-700" : ""}  cursor-pointer border-solid text-slate-500 py-1  px-3 mr-2  hover:bg-green-100 hover:border-green-700" htmlFor="item-medium`}>Medium</label>
                <input
                  id="item-medium"
                  type="radio"
                  name="item-medium"
                  className="hidden"
                />
                <label onClick={selectSize } htmlFor="item-large" className={`border-2 ${size==="Large" ? "bg-green-100 border-green-700" : ""} cursor-pointer border-solid text-slate-500  py-1 px-3 mr-2  hover:bg-green-100 hover:border-green-700" htmlFor="item-large`}>Large</label>
                <input
                  id="item-large"
                  type="radio"
                  name="item-large"
                  className="hidden"
                />
              </div>
              <div className="my-5 whitespace-nowrap">
                <h1 className="font-semibold text-lg mb-2">Color</h1>
                <label onClick={selectColor} htmlFor="item-red" className={`cursor-pointer ${color==="Red"?"border-green-700 bg-green-100" : ""} border-solid border-2 px-3 py-1 mr-2 rounded-md hover:border-green-700 hover:bg-green-100 text-slate-500`}> <i className="fa-solid fa-circle text-red-500"></i>Red</label>
                <input id="red" type="radio" name="red" className="hidden" />
                <label onClick={selectColor} htmlFor="item-green" className={`cursor-pointer ${color==="Green"?"border-green-700 bg-green-100" : ""} border-solid border-2 px-3 py-1 mr-2 rounded-md hover:border-green-700 hover:bg-green-100 text-slate-500`}><i className="fa-solid fa-circle text-green-500"></i>Green</label>
                <input
                  id="green"
                  type="radio"
                  name="green"
                  className="hidden"
                />
                <label onClick={selectColor} htmlFor="item-yellow" className={`cursor-pointer ${color==="Yellow"?"border-green-700 bg-green-100" : ""} border-solid border-2 px-3 py-1 mr-2 rounded-md hover:border-green-700 hover:bg-green-100 text-slate-500`}><i className="fa-solid fa-circle text-yellow-500"></i>Yellow</label>
                <input
                  id="yellow"
                  type="radio"
                  name="yellow"
                  className="hidden"
                />
                <label onClick={selectColor} htmlFor="item-black" className={`cursor-pointer ${color==="Black"?"border-green-700 bg-green-100" : ""} border-solid border-2 px-3 py-1 mr-2 rounded-md hover:border-green-700 hover:bg-green-100 text-slate-500`}><i className="fa-solid fa-circle text-black"></i>Black</label>
                <input
                  id="black"
                  type="radio"
                  name="black"
                  className="hidden"
                />
              </div>
              <div >
                <h1 className="font-semibold text-lg mb-2">Quantity</h1>
                <input ref={Quantity} onChange={()=>{
                  Quantity.current.value = Quantity.current.value<=0 ? "0" :  Quantity.current.value
                }} className="border-2 border-solid focus:outline-none mb-5 px-3 py-2 placeholder:text-black" type="number" name="" id=""  placeholder="1" /> 
              </div>
              <p className={cartFail === "" ? "" : cartFail === false ? successs : failure}>{cartFail === "" ? "" : cartFail === true ? "Failed to Add item to Cart" : "Succesfully Added a New Item to Cart"}</p>
              <button className="focus:outline-none border-solid border-2 hover:text-white hover:bg-black border-black py-3 px-10 w-full"> 
              <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) 
}
