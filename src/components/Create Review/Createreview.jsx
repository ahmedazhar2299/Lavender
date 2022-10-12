import React from "react";

export default function Createreview() {
  return (
    <div className="my-10">
      <h1 className="text-2xl font-semibold mb-5">Leave A Review</h1>
      <form action="">
        <div className="flex justify-between flex-wrap">
          <div className="my-5">
            <label className="text-slate-500" htmlFor="">Your Name</label>
            <input
              className="focus:outline-none border-2 px-3 py-1 w-full mt-3"
              placeholder="Enter your name"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="mb-5">
            <span className="text-slate-500 mr-5 ">Your Rating</span>
            <select className="text-yellow-500 focus:outline-none" name="" id="">
              <option value="">★★★★★ (5/5)</option>
              <option value="">★★★★☆ (4/5)</option>
              <option value="">★★★☆☆ (3/5)</option>
              <option value="">★★☆☆☆ (2/5)</option>
              <option value="">★☆☆☆☆ (1/5)</option>
            </select>
          </div>
        </div>
        <div>
            <label htmlFor="text-box-review"  className="text-slate-500">Add Description</label>
            <textarea  className="focus:outline-none border-2 px-3 py-1 w-full h-48 my-5" name="text-box-review" id="" placeholder="Enter your review"></textarea>
        </div>
        <button className="focus:outline-none border-2 border-solid border-black px-10 py-2 hover:bg-black hover:text-white font-semibold">Post Review</button>
      </form>
    </div>
  );
}
