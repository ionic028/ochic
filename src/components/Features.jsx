// eslint-disable-next-line no-unused-vars

import { motion, useAnimation } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";


function Features() {
 
  const cards = [useAnimation(), useAnimation()];
  
  const handleHover = (index)=>{
  cards[index].start({y: "0"})
  }

  const handleHoverEnd= (index)=>{
    cards[index].start({y: "100%"})
  }

  return (
    <div className="w-full   h-[150vh] py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="lg:text-7xl text-5xl  font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="lg:px-20">
        <div className="cards w-full flex lg:flex-row flex-col  lg:gap-10 mt-10">
          <motion.div 
           onHoverStart={()=>handleHover(0)}
            onHoverEnd={()=> handleHoverEnd(0)} 

          className="cardcontainer relative  w-1/2 h-[75vh ">
            <h1 className="absolute flex overflow-hidden z-[9]  right-0 text-6xl  translate-x-1/2 -translate-y-1/2 top-1/2 text-[#ad1414] leading-none tracking-tight">
              {"FYDE".split("").map((item,index) => (
                // eslint-disable-next-line react/jsx-key
                <motion.span 
                initial={{y:"100%"}}
                 animate ={cards[0]}
                 transition={{ ease: [0.22,1,0.36,1], delay:index*.05}}
                className="inline-block">
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="lg:w-full lg:h-full w-[100vw] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={()=>handleHover(1)}
          onHoverEnd={()=> handleHoverEnd(1)} 
          
          className="cardcontainer relative w-1/2 h-[75vh]  ">
            <h1 className="absolute flex overflow-hidden right-full text-6xl  translate-x-1/2 -translate-y-1/2 top-1/2 text-[#ad1414] leading-none tracking-tight">
            {"VISE".split("").map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <motion.span 
                initial={{y:"100%"}}
                 animate ={cards[1]}
                 transition={{ ease: [0.22,1,0.36,1], delay:index*.05}}
                className="inline-block">
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="lg:w-full w-[100vw] lg:h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
