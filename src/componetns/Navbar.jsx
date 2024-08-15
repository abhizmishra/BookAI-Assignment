import React from "react";
import DarkMode from "./DarkMode.jsx";


const Navbar = () => {
  return (
    <div className=" mx-[12%] mt-10 text-white flex flex-wrap justify-items-center  gap-2 ">
      <div className="flex flex-auto items-center">
        <div className="h-[32px] w-[32px]  rounded-full mr-2  bg-[#658EFE]  "></div>
        <img
          className="h-10 w-auto  "
          src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
          alt="img"
        />
        <h5 className="text-2xl   font-semibold">BookAI</h5>
      </div>

      <div className=" ">
        <nav>
          <ul className=" flex flex-wrap gap-5 font-normal text-center text-md  py-4">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#working">How It Works</a>
            </li>
            <li>
              <a href="#roadmap">Roadmap</a>
            </li>
            <li>
              <a href="https://trybookai.com/api">API</a>
            </li>
            <li>
              <a href="https://trybookai.com/api#pricing">Price</a>
            </li>

            <li>
              <a href="https://trybookai.com/api#pricing">Model</a>
            </li>
          </ul>
        </nav>
      </div>
      <button className=" px-4 h-10 mt-2 ml-2  font-normal  bg-[#6590FF] rounded-sm">
        Login / Sign Up
      </button>
    <DarkMode/>
    </div>
  );
};

export default Navbar;
