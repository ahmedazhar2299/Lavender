import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import fetchTotal from "../../api/fetchTotal";

export default function Cartitem({purchased,productId,quantity,total,color,size}) {
  const dispatch = useDispatch()
  const Quantity = useRef();
  const [product,setProduct] = useState({})
  const [productInCart,setproductInCart] = useState("true")
  useEffect(()=>{
    const fetchItem = async()=>{
      let item = await axios.get(`/product/${productId}`)
      setProduct(item.data? item.data : {})
    } 
    fetchItem()
  },[])


  const removeFromCart = (e)=>{
    e.preventDefault()
    const removeItem = async()=>{
    if(product.quantity!=1)
      await axios.post(`/cart/delete/${product._id}`,{
        "color" :color ,
        "size" : size
      })
    }
    removeItem()
    setproductInCart("false")
    fetchTotal(dispatch)
  }

  return productInCart==="false" ? "":(
    <>
      <div className="flex w-full p-5">
        <div className="flex mr-5">
          <div className="w-20 mr-3">
            <img
              src={product.profilePicture}
              alt=""
            />
          </div>

          <div className=" whitespace-nowrap w-24">
            <h1 className="font-semibold text-sm">{product.title}</h1>
            <div >
              <span className="text-xs text-slate-500">Size : </span>
              <span className="text-xs text-slate-500 ">{size}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 ">Color : </span>
              <span className="text-xs text-slate-500 ">{color}</span>
            </div>
          </div>
        </div>
        <div className="my-5 w-18 mr-28 whitespace-nowrap">
          <p className="text-sm">${product.price}</p>
        </div>
        <div className="mr-28 my-5 w-28 whitespace-nowrap">
          <input
            className={`border-2 border-solid focus:outline-none w-20 mx-2 text-center placeholder:text-black`}
            type="text"
            ref={Quantity}
            value = {quantity}
            disabled
          />
        </div>
        <div className="my-5 w-18 whitespace-nowrap">
          <p className="text-sm">${total}</p>
        </div>
        <div className="relative h-full w-10">
        <button onClick={removeFromCart} className={`focus:outline-none absolute top-0 right-0 hover:text-red-500 ${purchased?"hidden": ""}`}>
          <i className="fa-sharp fa-solid fa-xmark"></i>
          </button>
        </div>
         
      </div>
      <hr />
    </>
  );
}
