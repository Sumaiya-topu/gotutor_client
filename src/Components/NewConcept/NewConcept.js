import React from "react";
import { SiTaichigraphics } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
const NewConcept = () => {
  return (
    <div className="bg-white/90">
      <div className="w-2/3 mx-auto grid grid-cols-3 gap-5 pt-20">
        <div className="p-5 border-2 border-r-[#d3d3d3] ">
          <SiTaichigraphics className="mb-3 font-extrabold text-4xl text-[#b9b7b7]"></SiTaichigraphics>
          <h1 className="text-2xl text-[#b9b7b7] font-bold  ">
            Follow Technology Trend
          </h1>
          <p className=" mt-2">
            Stay Ahead with Modern Learning Tools. Embrace the Latest in
            Educational Technology.
          </p>
        </div>
        <div className="p-5 border-2 border-r-[#d3d3d3] ">
          <FaGlobe className="mb-3 font-extrabold text-4xl text-[#b9b7b7]"></FaGlobe>
          <h1 className="text-2xl text-[#b9b7b7] font-bold  ">
            Learn Everywhere
          </h1>
          <p className=" mt-2">
            Education Beyond Boundaries, Anytime, Anywhere.Empowering Learning
            on Your Terms{" "}
          </p>
        </div>
        <div className="p-5 border ">
          <BsPeopleFill className="mb-3 font-extrabold text-4xl text-[#b9b7b7]"></BsPeopleFill>
          <h1 className="text-2xl text-[#b9b7b7] font-bold  ">
            Learning Groups Community
          </h1>
          <p className=" mt-2">
            Connect, Collaborate, Excel Together.Nurturing Success Through Group
            Learning
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewConcept;
