import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
var defaultImgPath = "https://cdn.shopify.com/s/files/1/0648/4531/6322/products/6a79cbad2c6bb85204fb2c27252b1ea1.jpg?v=1653531923&width=1280"

export default function NewItem() {
    const fileUpload = useRef();
    const user = useSelector(state => state.fetchUser.user)
    const [isUploaded, setIsUploaded] = useState("");
    const title = useRef();
    const price = useRef();
    const category = useRef();
    const description = useRef();
    const [fail, setfail] = useState("")
    const failure = `border-2 p-3 border-red-500 text-red-500 w-full text-center `
    const successs = `border-2 p-3 border-green-500 text-green-500 w-full text-center`
    const addNewItem = async (event) => {
        event.preventDefault()
        if (isUploaded != "" && title.current.value != "" && price.current.value != "" && category.current.value != "" && description.current.value != "") {
            const newProduct = {
                "productPicture": isUploaded,
                "description": description.current.value,
                "title": title.current.value,
                "price": parseFloat(price.current.value),
                "category": category.current.value
            }
            try {
                await axios.post(`/product/add/${user._id}`, newProduct)
                setIsUploaded("")
                description.current.value = ""
                title.current.value = ""
                price.current.value = ""
                setfail(false)
            } catch (err) {
                setfail(true)
            }
        }
        else {
            setfail(true)
        }
    }

    return (
        <div className="max-w-4xl lg:mr-2 w-full vsm:px-10 lg:px-0">
            <div
                style={{ backgroundColor: "#F8F9FA" }}
                className="text-sm font-medium p-5 w-full "
            >
                <span>Add Product Details</span>
            </div>
            <div>
                <form onSubmit={addNewItem} >
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
                            <input required ref={title} placeholder="Mens Jersey" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="text" name="product-title" id="" />
                        </div>


                        <div className="w-full">
                            <label htmlFor="product-price" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Price</label>
                            <input required onChange={() => {
                                price.current.value = parseFloat(price.current.value) <= 0 ? "0" : price.current.value
                            }} ref={price} placeholder="9.99" className="focus:outline-none border-2 border-solid px-5 py-2 w-full " type="number" name="product-price" id="" />
                        </div>
                        <div className="w-full">
                            <label htmlFor="product-category" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Select Category</label>
                            <select ref={category} className="focus:outline-none border-2 border-solid px-5 py-2 w-full" name="product-category">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label htmlFor="product-des" className="block text-sm mt-4 mb-2 text-slate-500 font-semibold">Description</label>
                            <textarea ref={description} required className="focus:outline-none border-2 border-solid px-5 py-2 w-full resize-none h-40" type="number" name="city" id="" placeholder="A day-to-night dress great to wear" />
                        </div>

                    </div>
                    <div className='flex flex-col items-center gap-2 justify-center '>
                        <p className={fail === "" ? "" : fail === false ? successs : failure}>{fail === "" ? "" : fail === true ? "Failed to Add item" : "Succesfully Added a New Item"}</p>
                        <button className="focus:outline-none border-2 border-black border-solid w-8/12 py-2 px-10 text-sm font-semibold hover:text-white hover:bg-black">
                            Add <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}
