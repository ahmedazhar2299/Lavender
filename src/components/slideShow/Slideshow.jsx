import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

export default function Slideshow() {
  let navigate =useNavigate();
  return (
    <div className="relative">
      <Carousel
         autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
         interval={5000}
      >
        <div className=" relative">
          <img loading="lazy" style={{"height":"40vw","width":"auto"}} src="https://s1.1zoom.me/big7/29/Men_White_background_Model_Glance_Hands_561967_2112x1920.jpg" />
          <div className="lg:absolute right-20 top-1/3 m-5">
            <p className="lg:text-2xl sm:text-xl">Black & White</p>
            <h1 className="lg:text-6xl sm:text-4xl vsm:text-2xl">Fashionisto</h1>
            <button style={{"backgroundColor":"#212529"}} className="text-white font-bold px-5 py-3 mt-5" onClick={()=>navigate('/category/men')}>Start Shopping Today</button>
          </div>
        </div>
        <div className=" relative ">
          <img loading="lazy" style={{"height":"40vw","width":"auto"}} src="https://www.oliverwicks.com/modules/eshop3/products/backgrounds/15/1455_9.jpg" />
          <div className="lg:absolute left-10 top-1/4 m-5">
            <p className="lg:text-2xl sm:text-xl">Our All-Time Favourite</p>
            <h1 className="lg:text-6xl sm:text-4xl vsm:text-2xl">DINERS and CHARCOAL</h1>
            <button style={{"backgroundColor":"#212529"}} className="text-white font-bold px-5 py-3 mt-5" onClick={()=>navigate('/category/men')}>Start Shopping Today</button>
          </div>
        </div>
        <div className=" relative">
          <img loading="lazy" style={{"height":"40vw","width":"auto"}} src="https://imagescdn.allensolly.com/img/app/product/3/343733-1664487.jpg?auto=format" />
          <div className="lg:absolute top-1/3 right-1/3 m-5">
            <p className="lg:text-2xl sm:text-xl">For Every Occasion</p>
            <h1 className="lg:text-6xl sm:text-4xl vsm:text-2xl">PANTS and SHIRTS</h1>
            <button style={{"backgroundColor":"#212529"}} className="text-white font-bold px-5 py-3 mt-5" onClick={()=>navigate('/category/men')}>Start Shopping Today</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
