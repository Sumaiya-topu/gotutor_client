import React from "react";
import { SiTaichigraphics } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { GiCutDiamond } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import brainImage from "../../assets/Background/—Pngtree—brain bulb icon symbol design_5199221 (1).png";
import pattern1 from "../../assets/authentication/bg-pattern-02.png";
// import "./NewConcept.css";

const NewConcept = () => {
  return (
    <div className="bg-white/90 w-2/3 mx-auto">
      <div className=" ">
        <div className="">
          <img className="w-[180px] ml-20" src={pattern1} alt="" />
          <h1 className="text-center font-light  text-5xl text-[#7839ff] ">
            New Concept
          </h1>
          <h3 className=" font-serif text-center text-5xl font-[600] mt-5 text-black/90">
            Earn your badge and get interact more.
          </h3>
          <div className="flex w-2/3 mx-auto justify-between">
            <div className="flex items-center">
              <div>
                <div className="flex gap-4">
                  <GiCutDiamond className="text-8xl"></GiCutDiamond>
                  <div>
                    {" "}
                    <h1 className="text-xl font-semibold">Get your badge</h1>
                    <p className="text-sm text-[#7e838f]">
                      {" "}
                      We're offering badges based on your working achievements.
                      Earn your badge and get interact more to your desied
                      audiance.{" "}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-10">
                  <MdSpaceDashboard className="text-5xl"></MdSpaceDashboard>
                  <div>
                    {" "}
                    <h1 className="text-xl font-semibold">Access dashboard</h1>
                    <p className="text-sm text-[#7e838f]">
                      View your insights and discover your interaction with the
                      other profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="w-2/3  hover:-translate-y-1 hover:scale-105 duration-300  "
              src={brainImage}
              alt=""
            />
          </div>
        </div>
        <div className=" w-11/12 mx-auto grid grid-cols-3 gap-5  py-20">
          <div className="p-5 border-r-2 border-r-[#d3d3d3] ">
            <SiTaichigraphics className="mb-3 font-extrabold text-4xl text-[#b9b7b7]"></SiTaichigraphics>
            <h1 className="text-2xl text-[#b9b7b7] font-bold  ">
              Follow Technology Trend
            </h1>
            <p className=" mt-2">
              Stay Ahead with Modern Learning Tools. Embrace the Latest in
              Educational Technology.
            </p>
          </div>
          <div className="p-5 border-r-2 border-r-[#d3d3d3] ">
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
              Connect, Collaborate, Excel Together.Nurturing Success Through
              Group Learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewConcept;
