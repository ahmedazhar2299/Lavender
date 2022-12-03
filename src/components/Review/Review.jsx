import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const generateStars = (rating)=>{
  let starList = []
  let i =0;
  while(i<5){
    if(i<rating)
    starList.push(1)
    else
    starList.push(0)
    i++
  }
  return starList
}

export default function Review({userId,userName,description,rating}) {
  const [userImg,setUserImg] = useState("");
  let stars = generateStars(parseInt(rating))
  useEffect(()=>{
    const fetchImage = async()=>{
      const currentUser = await axios.get(`/user/${userId}/getProfileImg`)
      setUserImg(currentUser.data?currentUser.data : "")
    }
    fetchImage()
  },[])
  return (
    <div className='flex flex-nowrap mt-5 '>
      <div className='rounded-full border-2 p-3 w-28 h-28 text-center flex items-center justify-center mr-10 flex-shrink-0'>
        <img className='rounded-full w-20 h-20 object-contain' src= {userImg==="" ? "https://media.istockphoto.com/id/1208175274/vector/avatar-vector-icon-simple-element-illustrationavatar-vector-icon-material-concept-vector.jpg?s=612x612&w=0&k=20&c=t4aK_TKnYaGQcPAC5Zyh46qqAtuoPcb-mjtQax3_9Xc=" :userImg} alt="" />
      </div>
      <div>
        <h1>{userName}</h1>
            <div className='flex mt-2'>
              {stars.map(star=>{
               return star===1?  <i className="fa-solid fa-star text-yellow-400"></i> : <i className="fa-regular fa-star text-yellow-400"></i>
              })}
           
            </div>
        <p className='text-sm mt-5 text-slate-500'>{description}</p>
        <hr className='mt-10'/>
      </div>
    </div>
  )
}
