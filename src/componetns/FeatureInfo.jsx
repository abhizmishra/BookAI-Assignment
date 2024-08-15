
import { FaRobot } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";


import React from 'react'

 export function FeatureInfo() {
  return (
 
       <div id="features" className="  mx-[7%] mt-16 grid grid-cols-2 gap-10 md:grid-cols-4 ">
      <div className="grid text-white place-items-center hover:-translate-y-3 duration-300  ">
        <div className="rounded-full flex flex-none it bg-[#590A97] mb-7 h-14 w-14 p-3 justify-center items-center ">
          <FaRobot className=" h-10 w-10 " />
        </div>
        <h2>AI-Powered Writing</h2>
        <p className=" text-center">
          Generate high-quality content with advanced AI technology.
        </p>
      </div>
      <div className="grid text-white place-items-center hover:-translate-y-3 duration-300 ">
        <div className=" mb-7 h-14 w-14 p-3 rounded-full items-center justify-center flex bg-[#590A97]">
          <FaBook className="h-7 w-7 " />
        </div>
        <h2>Custom Genres</h2>
        <p className=" text-center">
          Create stories in any genre or blend multiple styles.
        </p>
      </div>
      <div className="grid text-white place-items-center hover:-translate-y-3 duration-300  ">
        <FaDownload className=" mb-7 h-14 w-14 p-3 rounded-full bg-[#590A97] " />
        <h2>Instant Download</h2>
        <p className=" text-center">
          Get your completed book in various formats instantly.
        </p>
      </div>
      <div className="grid text-white place-items-center hover:-translate-y-3 duration-300   ">
        <FaLanguage className=" mb-7 h-14 w-14 p-3 rounded-full bg-[#590A97] " />
        <h2>Multilingual</h2>
        <p className=" text-center">
          Generate content in multiple languages effortlessly.
        </p>
      </div>
    </div>

  )
}


export default FeatureInfo;


