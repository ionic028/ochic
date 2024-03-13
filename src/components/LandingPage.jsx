
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
 
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-10"> 
      <div className="textstructure  my-[100px] px-10 lg:mt-32 lg:px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-center justify-center">
                  {index === 1 && (
                  <motion.div 
                  initial={{width:0}} 
                  animate={{width: "8vw"}}
                  transition={{ease :[0.76, 0, 0.24, 1], duration: "1"}} 
                  className="w-[8vw] h-[5.7vw] m-2 rounded overflow-hidden">
                    <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>)}
                <h1 className="flex items-center uppercase lg:text-[7.5vw] lg:leading-[6.5vw] leading-[9.5vw] lg:tracking-tighter font-medium font-['Founders_Grotesk'] text-[9.5vw]">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] my-10 border-zinc-700 mt-[5.5vw]  flex items-center lg:justify-between  gap-7 py-5 px-5  flex-wrap ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className=" text-[25px] lg:text-[20px] my-5 font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center justify-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center  border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
