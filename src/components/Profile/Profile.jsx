import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const navigate = useNavigate();
    const [sectionColor, setSectionColor] = useState({
        "orders" : "true",
        "profile": "false",
        "logout" : "false"
    });
  return (
    <div className="pt-5" style={{ backgroundColor: "#F8F9FA" }}>
      <div className="flex flex-col justify-center items-center pt-5 mb-5">
        <div className="h-40 w-40 p-2 border border-grey-800 shadow-xl rounded-full bg-white">
          <img
            className=" object-cover rounded-full w-full h-full"
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
            alt=""
          />
        </div>

        <p className="text-lg font-semibold mt-5 ">Muhammad Ahmed</p>
        <p className="mb-5 text-sm text-slate-500">Lahore, Pakistan</p>
      </div>
      <div onClick={()=>{
        setSectionColor({
            "orders" : "true",
            "profile": "false",
            "logout" : "false"
        })
        navigate('/order')
      }} className={` cursor-pointer flex w-full ${ sectionColor.orders=="true"? "bg-slate-200 " : "" } px-5 py-3`}>
        <i className="fa-solid fa-bag-shopping  text-xl mr-3 text-slate-800 "></i>
        <p >Orders</p>
      </div>
      <div onClick={()=>{
        setSectionColor({
            "orders" : "false",
            "profile": "true",
            "logout" : "false"
        })
      }}  className={` cursor-pointer flex w-full ${ sectionColor.profile=="true"? "bg-slate-200 " : "" } px-5 py-3`}>
        <i class="fa-solid fa-user text-xl mr-3 text-slate-800"></i>
        <p>Profile</p>
      </div>
      <div onClick={()=>{
        setSectionColor({
            "orders" : "false",
            "profile": "false",
            "logout" : "true"
        })
      }}  className={` cursor-pointer flex w-full ${ sectionColor.logout=="true"? "bg-slate-200 " : "" } px-5 py-3`}>
        <i class="fa-sharp fa-solid fa-arrow-right-from-bracket text-xl mr-3 text-slate-800"></i>
        <p>Logout</p>
      </div>
    </div>
  );
}
