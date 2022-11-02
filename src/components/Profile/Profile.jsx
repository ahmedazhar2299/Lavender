import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
import Logout from "../Logout/Logout";
import axios from 'axios'
var defaultImgPath = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"





export default function Profile() {
  const [toggleModal, setToggleModal] = useState(false);
  const fileUpload = useRef();
  const navigate = useNavigate();
  const user = useSelector(state => state.fetchUser.user)
  const [isUploaded, setIsUploaded] = useState("");
  const setImg = async (uploaded_image)=>{
    if(user){
      try {
        const newImg = {
          "id" : user._id,
          "profilePicture" : uploaded_image 
        }
        await axios.post(`/user/${user._id}/setProfileImg`,newImg)
        setIsUploaded(uploaded_image)
       } catch (err) {
         console.log(err)
       }
    }
    
    }

 
    const getImg = async ()=>{
      if(user){
        try {
          const img = await axios.get(`/user/${user._id}/getProfileImg`)
          if(img)
          setIsUploaded(img.data)
          else{
            setIsUploaded("")
          }
         } catch (err) {
           console.log("Unable to load image")
         }

      }
      }
      getImg();

  
  const [sectionColor, setSectionColor] = useState({
    "orders": "true",
    "profile": "false",
    "logout": "false"
  });

  return (
    <div className="pt-5" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="flex flex-col justify-center items-center pt-5 mb-5">
        <div className="h-40 w-40 p-2 border border-grey-800 shadow-xl rounded-full bg-white ">
          <label htmlFor="uploadImage"><img
            className=" object-cover rounded-full w-full h-full cursor-pointer"
            src={isUploaded === "" ? defaultImgPath : `${isUploaded}`}
            alt=""
          /></label>
          <input onChange={(e) => {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              const uploaded_image = reader.result;
              setImg(uploaded_image);
            });
            reader.readAsDataURL(e.target.files[0])
          }} ref={fileUpload} id="uploadImage" className="hidden" type="file" accept="image/jpeg, image/png, image/jpg" />
        </div>

        <p className="text-lg font-semibold mt-5 ">Muhammad Ahmed</p>
        <p className="mb-5 text-sm text-slate-500">Lahore, Pakistan</p>
      </div>
      <div onClick={() => {
        setSectionColor({
          "orders": "true",
          "profile": "false",
          "logout": "false"
        })
        navigate('/order')
      }} className={` cursor-pointer flex w-full ${sectionColor.orders == "true" ? "bg-slate-200 " : ""} px-5 py-3`}>
        <i className="fa-solid fa-bag-shopping  text-xl mr-3 text-slate-800 "></i>
        <p >Orders</p>
      </div>
      <div onClick={() => {
        setSectionColor({
          "orders": "false",
          "profile": "true",
          "logout": "false"
        })
      }} className={` cursor-pointer flex w-full ${sectionColor.profile == "true" ? "bg-slate-200 " : ""} px-5 py-3`}>
        <i className="fa-solid fa-user text-xl mr-3 text-slate-800"></i>
        <p>Profile</p>
      </div>
      <div onClick={() => {
        setSectionColor({
          "orders": "false",
          "profile": "false",
          "logout": "true"
        })
        setToggleModal(true)
      }} className={`cursor-pointer flex w-full ${sectionColor.logout == "true" ? "bg-slate-200 " : ""} px-5 py-3`}>
        {toggleModal === true ? <Logout toggler={setToggleModal} /> : ""}
        <i className="fa-sharp fa-solid fa-arrow-right-from-bracket text-xl mr-3 text-slate-800"></i>
        <p>Logout</p>
      </div>
    </div>
  );
}
