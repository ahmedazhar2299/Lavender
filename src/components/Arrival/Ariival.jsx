import React from "react";
import Product from "../Product/Product";

export default function Ariival() {
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
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
     </div>
    </div>
  );
}
