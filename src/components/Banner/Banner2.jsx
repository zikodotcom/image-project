import React from "react";
import image from '../../assets/imgs/t.png'
const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
        
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl bg-green-700"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {data.discount}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-3xl lg:text-4xl font-bold"
            >
              {" "}
              {data.title}
            </h1>
            <br></br>
            <p data-aos="fade-up" className="text-sm">
              {data.date}
            </p>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={image}
              alt=""
              className="scale-125 w-[100px] md:w-[230px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.2)] object-cover"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-xl">
              {data.title2}
            </p>
            <p data-aos="fade-up" className=" text-2xl sm:text-2xl font-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button
               
                className="bg-white py-2 px-4 rounded-full text-zinc-950"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;