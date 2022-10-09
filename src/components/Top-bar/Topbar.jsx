import React from "react";

export default function Topbar() {
  return (
    <div style={{"background-color":"#EEECDF"}} className="flex bg-red-100 text-md lg:px-10 py-5 md:px-0">
      <div className="md:inline vsm:hidden sm:hidden">
        <i className="fa-brands fa-facebook-f mx-1 cursor-pointer"></i>
      </div>
      <div className="md:inline vsm:hidden sm:hidden">
        <i className="fa-brands fa-twitter mx-1 cursor-pointer"></i>
      </div>
      <div className="md:inline vsm:hidden sm:hidden">
        <i class="fa-solid  fa-phone ml-10 cursor-pointer"></i>
        <p className="inline whitespace-nowrap ml-3">080-534-416-327</p>
      </div>
      <div className="lg:w-8/12 md:w-8/12 ml-5 text-center">
        <p className="inline">Free in-store delivery</p>
      </div>
    </div>
  );
}
