import React from "react";
import { FaUserCircle, FaStore,FaUsers,FaPaintBrush } from "react-icons/fa";



const Roadmap = () => {
  return (
    <div id="roadmap" className=" flex flex-nowrap justify-center items-center">
      <div className="flex flex-col py-10 p-10 lg:p-24 mb-20 max-w-fit text-white justify-center items-center mx-[7%] bg-white/5 rounded-lg  ">
        <h1 className="font-bold text-2xl mb-5">Roadmap</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" flex flex-col gap-10 ">
            <div className="flex felx-col  ">
              <div className=" flex h-12 w-12 min-w-12 rounded-full  justify-center items-center bg-[#6888FF] ">
                <FaUserCircle className="h-5 w-5" />
              </div>
              <div className="flex flex-col  items-start min-w-sm ml-5 ">
                <h1 className="font-bold text-lg">
                  Advanced Character Development
                </h1>
                <p className="font-normal text-[16px]">
                  AI-powered tool for creating deep, complex characters.
                </p>
              </div>
            </div>

            <div className="flex felx-col  ">
              <div className=" flex h-12 w-12 min-w-12 rounded-full  justify-center items-center bg-[#6888FF] ">
                <FaStore className="h-5 w-5" />
              </div>
              <div className="flex flex-col justify-center items-start min-w-sm ml-5">
                <h1 className="font-bold text-lg">
                  E-book Platform Integration
                </h1>
                <p className="font-normal text-[16px]">
                  Seamless publishing to popular e-book platforms.
                </p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-10">
            <div className="flex felx-col   ">
              <div className=" flex h-12 w-12 min-w-12 rounded-full  justify-center items-center bg-[#6888FF] ">
                <FaUsers className="h-5 w-5" />
              </div>
              <div className="flex flex-col justify-center items-start min-w-sm ml-5 ">
                <h1 className="font-bold text-lg">Collaborative Writing</h1>
                <p className="font-normal text-[16px]">
                  Co-create stories with other authors or AI assistants.
                </p>
              </div>
            </div>

            <div className="flex felx-col  ">
              <div className=" flex h-12 w-12 min-w-12 rounded-full  justify-center items-center bg-[#6888FF] ">
                <FaPaintBrush className="h-5 w-5" />
              </div>
              <div className="flex flex-col  items-start min-w-sm ml-5">
                <h1 className="font-bold text-lg">AI Cover Art Generation</h1>
                <p className="font-normal text-[16px]">
                  Create stunning book covers with AI-generated art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
