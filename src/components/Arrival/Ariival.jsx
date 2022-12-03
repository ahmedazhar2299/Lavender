import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { CircularProgress } from '@mui/material'
const randomSelector = (arr, num) => {
  let selected = [];
  let i = 0;
  if (arr.length > num) {
    while (i < num) {
      let randomIndex = Math.floor(Math.random() * (arr.length - 1))
      if (selected.indexOf(arr[randomIndex]) === -1)
        selected.push(arr[randomIndex])
      else {
        i--;
      }
      i++;
    }
    return selected
  }
  return arr
}

export default function Ariival() {
  const [Items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let clothes = []
      clothes = await axios.get('/product')
      setItems(clothes.data? clothes.data: [])
    }
    getProducts();
  }, [Items])

  return (
    <div className="py-20 px-10">
      <div>
        <h1 className="font-bold vsm:text-4xl md:text-6xl text-center my-10">
          New Arrivals
        </h1>
        <p className="text-center text-lg text-slate-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
          veritatis odio temporibus magni assumenda eius nostrum. Harum eum
          quisquam, eaque maiores facere est. Architecto optio nulla tenetur
          veniam repellat. Doloremque.
        </p>
      </div>
      <div className="flex vsm:flex-col md:flex-row font-semibold text-lg my-10 justify-between">
        <ul className="flex flex-wrap  vsm:justify-center md:justify-start">
          <li className="text-center font-bold hover:underline mr-3">
            All Products
          </li>
          <li className=" text-slate-600 hover:underline mr-2">Shirts</li>
          <li className=" text-slate-600 hover:underline mr-2">Pants</li>
          <li className="  text-slate-600 hover:underline">Ties</li>
        </ul>
        <p
          className="hover:underline text-md font-semibold vsm:mt-5 md:mt-0 vsm:text-center"
          style={{ color: "#BCAC76" }}
        >
          All PRODUCTS
        </p>
      </div>
      <div className="flex flex-wrap w-full justify-center items-center">

        {Items.length === 0 ? <div className="my-40" ><CircularProgress color="inherit" /></div>
          : randomSelector(Items,6).map(item=>{
            return <Product id={item._id} key={item._id} title={item.title} price={item.price}  image={item.profilePicture}/> 
          })}
      </div>
    </div>
  );
}
