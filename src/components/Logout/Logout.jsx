import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import logoutSesion from '../../api/Logout';

export default function Logout({toggler}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [hideModal,setHideModal] = useState(false);

    useEffect(()=>{
        if(hideModal===true)
        {
            toggler(false)
        }
        },[hideModal])
        
    return (
        <div hidden={hideModal===true?true : false} className={`bg-opacity-80 bg-black fixed inset-0 cursor-default `}>
            <div className="fixed sm:h-40 sm:w-80 vsm:w-3/4 vsm:h-40 m-auto inset-0 bg-white rounded-md">
                <div className="relative sm:mb-12 flex p-5 overflow-hidden">
                    <p className=" font-semibold text-xl text-center">Confirm Logout from Lavender?</p>
                    <button onClick={() => { setHideModal(true) }} className="absolute top-0 right-2 hover:text-red-700 "><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="flex">
                    <button onClick={async() => {
                        setHideModal(true)
                        await logoutSesion(dispatch);   
                        navigate('/register')
                    }} className="focus:outline-none w-full font-semibold rounded-bl-md bg-green-300 py-2 hover:bg-green-500">Yes</button>
                    <button onClick={() => {
                        setHideModal(true)
                    }} className="focus:outline-none w-full font-semibold rounded-br-md bg-red-300 py-2 hover:bg-red-500">No</button>
                </div>
            </div>
        </div>
    )
}
