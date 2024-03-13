// eslint-disable-next-line no-unused-vars
import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex lg:flex-row flex-col gap-5 items-center lg:px-32">
      <div className="cardcontainer h-[50vh] lg:w-1/2 w-3/4">
        <div className="card w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center relative">
          <img
            className="w-32"
            src={"https://ochi.design/wp-content/uploads/2022/04/logo001.svg"}
            alt=""
          />
          <button className="absolute px-5 py-1 left-10 border-2 rounded-full bottom-10 ">&copy; 2019-2022</button>
        </div>    
      </div>
      <div className="cardcontainer  h-[50vh] lg:w-1/2 w-full flex flex-col lg:flex-row gap-5 ">
        <div className="card lg:w-1/2 w-3/2 h-full rounded-xl bg-[#192826]">
        <div className="card w-full h-full rounded-xl bg-[#192826] flex items-center justify-center relative">
          <img
            className="w-32"
            src={"https://ochi.design/wp-content/uploads/2022/04/logo002.svg"}
            alt=""
          />
          <button className="absolute lg:px-5 px-7 py-1 left-10 border-2 rounded-full bottom-10 lg:block hidden ">Rating 5.0 on Clutch</button>
        </div>
        </div>
        <div className="card lg:w-1/2 w-3/2 h-full rounded-xl bg-[#192826] relative">
        <div className="card w-full h-full rounded-xl bg-[#192826] flex items-center justify-center relative">
          <img
            className="lg:w-[8vw] w-[35vw] "
            src={"https://ochi.design/wp-content/uploads/2022/04/logo003.png"}
            alt=""
          />
      
          <button className="absolute px-1 py-1 left-10 border-2 rounded-full bottom-10 whitespace-nowrap lg:block  hidden">Business Bootcamp Alumni</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
