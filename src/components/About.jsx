// eslint-disable-next-line no-unused-vars
import React from "react";

function About() {
  return (
    <div className="w-full px-20 py-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] lg:text-[3vw] text-[7vw]  lg:leading-[4.5vw] leading-[7.5vw]  lg:tracking-tight'>
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full lg:flex gap-5 border-t-[1px] pt-10 mt-10 border-[#a1b562]">
        <div className="lg:w-1/2">
          <h1 className="lg:text-7xl text-3xl">Our approach :</h1>
          <button className="flex uppercase lg:gap-10 gap-5 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="lg:w-1/2 lg:h-[70vh] h-[50vh]   rounded-3xl overflow-hidden lg:my-0 my-10">
          <img
            className="h-full w-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
