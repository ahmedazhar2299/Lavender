import axios from "axios";
import React, { useRef } from "react";
import { useSelector } from "react-redux";

export default function Createreview() {
  const userName = useRef("")
  const rating = useRef("")
  const description = useRef("")
  const product = useSelector(state=>state.fetchItem.Item)
  const addReview =async(event)=>{
        event.preventDefault()
        if (userName.current.value != "" && rating.current.value != "" && description.current.value != "") {
            const newRating = {
                "name": userName.current.value,
                "description": description.current.value,
                "rating": rating.current.value.slice(6)[0],
            }
           
            try {
                await axios.post(`/product/${product._id}/rate`, newRating)
                description.current.value = ""
               userName.current.value = ""
            } catch (err) {
                console.log(err);
            }
        }
        else {
          console.log("Unable to provide Rating");
        }
  }
  return (
    <div className="my-10">
      <h1 className="text-2xl font-semibold mb-5">Leave A Review</h1>
      <form onSubmit={addReview} action="">
        <div className="flex justify-between flex-wrap">
          <div className="my-5">
            <label  className="text-slate-500" htmlFor="">Your Name</label>
            <input 
              ref={userName}
              required
              className="focus:outline-none border-2 px-3 py-1 w-full mt-3"
              placeholder="Enter your name"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="mb-5">
            <span className="text-slate-500 mr-5 ">Your Rating</span>
            <select ref={rating} className="text-yellow-500 focus:outline-none" name="" id="">
              <option >★★★★★(5/5)</option>
              <option >★★★★☆(4/5)</option>
              <option>★★★☆☆(3/5)</option>
              <option >★★☆☆☆(2/5)</option>
              <option>★☆☆☆☆(1/5)</option>
            </select>
          </div>
        </div>
        <div>
            <label htmlFor="text-box-review"  className="text-slate-500">Add Description</label>
            <textarea ref={description} required className="focus:outline-none border-2 px-3 py-1 w-full h-48 my-5" name="text-box-review" id="" placeholder="Enter your review"></textarea>
        </div>
        <button className="focus:outline-none border-2 border-solid border-black px-10 py-2 hover:bg-black hover:text-white font-semibold">Post Review</button>
      </form>
    </div>
  );
}
