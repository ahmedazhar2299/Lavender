import React from 'react'
import { useState } from "react";
import {useSelector} from 'react-redux'
import { useRef } from 'react';
var defaultImgPath = "https://cdn.shopify.com/s/files/1/0648/4531/6322/products/6a79cbad2c6bb85204fb2c27252b1ea1.jpg?v=1653531923&width=1280"

export default function NewItem() {
const fileUpload = useRef();
const user = useSelector(state => state.fetchUser.user)
  const [isUploaded, setIsUploaded] = useState("");

    return (
        <div className="max-w-4xl lg:mr-2 w-full vsm:px-10 lg:px-0">
            <div
                style={{ backgroundColor: "#F8F9FA" }}
                className="text-sm font-medium p-5 w-full "
            >
                <span>Add Product Details</span>
            </div>
            <div>
                <form action="">
                    <div>
                    <div className="">
                        <h3 className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Add Image</h3>
                    <label htmlFor="uploadImage"><img
                            className=" w-32 h-32 cursor-pointer"
                            src={isUploaded === "" ? defaultImgPath : `${isUploaded}`}
                            alt=""
                        /></label>
                        <input
                        
                        onChange={(e) => {
                            const reader = new FileReader();
                            reader.addEventListener("load", () => {
                                const uploaded_image = reader.result;
                                setIsUploaded(uploaded_image)
                            });
                            reader.readAsDataURL(e.target.files[0])
                        }} ref={fileUpload} id="uploadImage" className="hidden" type="file" accept="image/jpeg, image/png, image/jpg" />
                    </div>

                    

                        <div className="w-full">
                            <label htmlFor="product-title" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Title</label>
                            <input placeholder="Mens Jersey" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="product-title" id="" />
                        </div>

                        
                        <div className="w-full">
                            <label htmlFor="product-price" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Price</label>
                            <input placeholder="9.99" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="product-price" id="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="product-des" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Description</label>
                            <textarea className="focus:outline-none border-2 border-solid px-5 py-2 w-full resize-none h-40" type="number" name="city" id="" placeholder="A day-to-night dress great to wear" />
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
