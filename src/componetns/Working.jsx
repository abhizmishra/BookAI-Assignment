import React from 'react'
import { FaMagic, FaPencilAlt, FaRegCheckCircle } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";


const Working = () => {
  return (
    <div id='working' className=" flex flex-col items-center p-14 justify-center my-24 mx-[7%] rounded-lg  bg-white/5 backdrop-blur-xs max-w-auto max-h-fit  backdrop-opacity-10 text-white ">
      <h1 className="pb-10 text-center text-2xl font-semibold">
        How It Works{" "}
      </h1>

      <div className=" flex flex-wrap gap-8  ">
        <div className="flex  gap-8 items-center">
          <FaMagic className="h-14 w-14 rounded-full min-w-14 bg-cover p-3 bg-[#6591FF] " />
          <div className="">
            <h1 className="text-xl font-semibold">Choose Your Genre</h1>

            <h2>
              Select from a wide range of genres or create a custom blend.
            </h2>
          </div>
        </div>
        <div className="flex  gap-8  items-center">
          <FaPencilAlt className="h-14 w-14 rounded-full  min-w-14 pt-2 pr-2 pl-3 pb-3 bg-[#6591FF] " />
          <div className="">
            <h1 className="text-xl font-semibold">Provide Key Details</h1>

            <h2>
              Input main characters, plot points, or themes to guide the AI.
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap  gap-5">
          <div className="flex  gap-8  items-center">
            <AiFillSetting className="h-14 w-14 rounded-full  min-w-14 xl:mr-9  p-3 bg-[#6591FF] " />
            <div className="">
              <h1 className="text-xl font-semibold">AI Generation</h1>

              <h2>Our advanced AI creates your book based on your inputs. </h2>
            </div>
          </div>
          <div className="flex  gap-8">
            <FaRegCheckCircle className="h-14 w-14 rounded-full  min-w-14  p-3 bg-[#6591FF] " />
            <div className="">
              <h1 className="text-xl font-semibold">Review and Download</h1>

              <h2>
                Review your generated book and download in your preferred
                format.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Working 
