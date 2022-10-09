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
        <Product src={"https://varkala-react-version-c8q73rcwf-ondrej-svestka.vercel.app/_next/image?url=%2Fimg%2Fproduct%2F0364326148_1_1_1.jpg&w=1920&q=75"}/>
        <Product src={"https://i0.wp.com/jaxsonmaximus.com/wp-content/uploads/2020/04/34394c211f01e58539f91e79e6ce1420.jpg?fit=564%2C1002&ssl=1"}/>
        <Product src={"https://ae01.alicdn.com/kf/Hda5634598f06472fa71ad7a07a94fcbbT.jpg"}/>
        <Product src={"https://i.pinimg.com/originals/2a/fe/e1/2afee127c87029f5440654d4c3652bf4.jpg"}/>
        <Product src={"https://cdn.cliqueinc.com/posts/83049/casual-style-83049-1584637214442-promo.700x0c.jpg"}/>
        <Product src={"https://ae01.alicdn.com/kf/H46b0f7e90b0a4937be968e6b6420dd53A.jpg?width=750&height=770&hash=1520"}/>
     </div>
    </div>
  );
}
