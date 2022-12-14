import React, { useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Nav bar/Navbar";
import Services from "../../components/Services/Services";
import Topbar from "../../components/Top-bar/Topbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import loginCall from "../../api/loginCall";
import axios from 'axios'
export default function Register() {
  let navigate = useNavigate();
  const username = useRef();
  const loginEmail = useRef();
  const loginPassword = useRef();
  const registerEmail = useRef();
  const failure = ` p-3 mb-5 text-red-500 w-full border-2 border-red-500 text-center `
  const successs = ` p-3 mb-5 text-green-500 w-full border-2 border-green-500 text-center`
  const [loginFail,setLoginFail] = useState("");
  const [registerFail,setRegisterFail] = useState("");
  const registerPassword = useRef();
  const dispatch = useDispatch();


  const handleLogin = async (event) => {
    event.preventDefault()
    const userCreds = {
      "password" : loginPassword.current.value,
      "email" : loginEmail.current.value
      }
   const response =  await loginCall(userCreds,dispatch)
   setLoginFail(response? false: true )

  }

  const handleRegister = async (event)=>{
    event.preventDefault()
        const userCreds = {
          "username" : username.current.value,
          "password" : registerPassword.current.value,
          "email" : registerEmail.current.value
      }
      try {
       await axios.post('/auth/register',userCreds)
       const response = await loginCall(userCreds,dispatch)
       setRegisterFail(response? false: true )
      } catch (err) {
        console.log(err)
        setRegisterFail(true )
      }
  }

  
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="my-20">
        <div className="text-center">
          <span onClick={() => navigate('/')} className="text-sm font-bold hover:underline cursor-pointer mr-2">
            Home
          </span>
          <span className="text-sm mr-2">/</span>
          <span className="text-sm text-slate-500">Customer Zone</span>
          <h1 className="my-10 font-medium md:text-6xl vsm:text-2xl sm:text-4xl">CUSTOMER ZONE</h1>
        </div>
        <div className="flex flex-wrap lg:px-20 justify-center">
          <div className="max-w-lg vsm:mx-10 lg:ml-0 w-full">
            <h3
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5"
            >
              LOGIN
            </h3>
            <p className="ml-5 my-5 font-medium">Already our Customer?</p>
            <p className="text-sm text-slate-500 ml-5 my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ipsum dicta nemo totam. Pariatur natus expedita, dolorum
              cupiditate distinctio voluptas voluptate, dicta quod inventore
              quibusdam aliquam aspernatur neque fugiat corrupti?
            </p>
            <hr className="ml-5 my-5 border-solid border-slate-300 border-1" />
            <form onSubmit={handleLogin} className="ml-5 mb-10">
              <label className="text-slate-500" htmlFor="email">
                Email
              </label>
              <input
                ref={loginEmail}
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="email"
                required
                name="email"
              />
              <label className="text-slate-500" htmlFor="password">
                Password
              </label>
              <input
                minLength={6}
                ref={loginPassword}
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="password"
                required
                name="password"
              />
               <p className={loginFail === "" ? "" : loginFail === false ? successs : failure}>{loginFail === "" ? "" : loginFail === true ? "Failed to Login" : "Login Successfull"}</p>
              <button type="submit" className="text-center w-full border-2 border-solid border-black focus:outline-none py-2 font-bold hover:bg-black hover hover:text-white">
                Log In
              </button>
            </form>
          </div>

          <div className="max-w-lg vsm:mx-10 lg:mx-0 w-full">
            <h3
              style={{ backgroundColor: "#F8F9FA" }}
              className="text-sm font-medium p-5"
            >
              NEW ACCOUNT
            </h3>
            <p className="ml-5 my-5 font-medium">Not our registered customer yet?</p>
            <p className="text-sm text-slate-500 ml-5 my-5">
              With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!
            </p>
            <hr className="ml-5 my-5 border-solid border-slate-300 border-1" />
            <form onSubmit={handleRegister} className="ml-5 mb-10" >
              <label className="text-slate-500" htmlFor="name">
                Name
              </label>
              <input
                ref={username}
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="text"
                required
                name="name"
              />
              <label className="text-slate-500" htmlFor="email">
                Email
              </label>
              <input
                ref={registerEmail}
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="email"
                required
                name="email"
              />
              <label className="text-slate-500" htmlFor="password">
                Password
              </label>
              <input
                minLength={6}
                ref={registerPassword}
                className="focus:outline-none block border-solid border-2 w-full px-2 py-1 mt-2 mb-5"
                type="password"
                required
                name="password"
              />
               <p className={registerFail === "" ? "" : registerFail === false ? successs : failure}>{registerFail === "" ? "" : registerFail === true ? "Failed to Register" : "Register Successfull"}</p>
              <button type="Submit" className="text-center w-full border-2 border-solid border-black focus:outline-none py-2 font-bold hover:bg-black hover hover:text-white">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
      <Services />
      <Footer />
    </>
  );
}
