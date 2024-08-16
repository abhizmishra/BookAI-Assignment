import React from "react";

const Hero = () => {
  return (
    <div className=" mx-[7%] flex flex-wrap  text-white px-10 mt-40 items-center justify-center">
      <div>
        <p className="text-[48px] font-bold text-center ">
          Explore the Possibilities of 
          <span>     </span>
          <span className="sm:border-b-2 sm:border-[#6B7DFE] text-[#6310A7] outline-10">
          
             AI Book Writing
          </span>{" "}
          with BookAI
        </p>
        <div className=" flex h-20  justify-center ">
          <p className=" max-w-[600px] text-center text-md mt-9  text-[#B3B3B3] ">
            Unleash the power of AI to create captivating books in minutes.
            Download, Distribute wherever you want. Generate unlimited free
            books.
          </p>
        </div>
        <div className="flex min-w-[400px] flex-nowrap justify-center items-center mt-16 font-bold">
          <button className="  mx-1 px-5  min-h-10  bg-[#5EA1FE] rounded-3xl text-white">
            Get Started
          </button>
          <button className=" min-h-10 px-5  bg-[#5EA1FE] rounded-3xl text-white">
            Get API Access
          </button>
        </div>
      </div>

      <div className="  relative mt-16 rounded-lg  w-auto  h-auto mb-10 bg-white/5 backdrop-blur-xs backdrop-opacity-10 p-10">
        <div className="">
          <img
            className=" duration-300 min-h-[170px] min-w-[350px] lg:w-[930px] lg:h-[500px] sm: hover:scale-105 rounded-md"
            src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/book2.png"
            alt=""
          />
          <div className=" flex felx-nowrap absolute rounded-lg top-3 left-3 bg-white/5 backdrop-blur-xs h-auto w-auto  backdrop-opacity-10 p-2">
            <div className="h-[20px]   w-[20px] mt-[53px] rounded-full mr-3  bg-[#658EFE]   "></div>
            <img
              className=" duration-500 hover:scale-105 rounded-md h-[120px] w-[85px] "
              src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/public-assets/paradox.png"
              alt="image"
            />
          </div>
          <div className=" flex flex-row absolute rounded-lg bottom-5 right-3 bg-white/5 backdrop-blur-xs   backdrop-opacity-10 p-2">
            <div className="h-[20px]   w-[20px]  rounded-full mr-2 mt-[0.5px] bg-[#658EFE]   "></div>
            <h1>Chapter complete</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
