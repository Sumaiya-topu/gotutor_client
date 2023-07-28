import React from "react";
import { FaWpforms } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { GiAchievement } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";

const TeacherInfoBody = () => {
  return (
    <div className="bg-white relative h-[500px] mt-10">
      {/* information section */}
      <div className="absolute xl:left-[225px] -top-[120px]">
        <div className=" w-3/4 xl:w-9/12 mx-auto flex flex-wrap md:flex-nowrap bg-[#7839ff] p-5 xl:py-10">
          <div className="text-white p-5 w-full text-start md:border-r border-[#b799f86b]">
            <div className="w-[50px] flex justify-center py-[10px] rounded-full  border border-white hover:bg-white hover:text-[#7839ff] ">
              {" "}
              <FaWpforms className="text-3xl  "></FaWpforms>
            </div>
            <p className=" text-[15px] font-sans mt-3">Step 1</p>
            <p className="text-lg font-sans font-light ">
              Enroll The Form & Confirm The Subject
            </p>
          </div>
          <div className="text-white p-5 w-full text-start md:border-r border-[#b799f86b] ">
            <div className="w-[50px] flex justify-center py-[10px] rounded-full  border border-white hover:bg-white hover:text-[#7839ff] ">
              {" "}
              <HiBadgeCheck className="text-3xl  "></HiBadgeCheck>
            </div>
            <p className=" text-[15px] font-sans mt-3">Step 2</p>
            <p className="text-lg font-sans font-light ">
              Waiting For Our Preliminary Review
            </p>
          </div>
          <div className="text-white p-5 w-full text-start md:border-r border-[#b799f86b] ">
            <div className="w-[50px] flex justify-center py-[10px] rounded-full  border border-white hover:bg-white hover:text-[#7839ff] ">
              {" "}
              <GiAchievement className="text-3xl  "></GiAchievement>
            </div>
            <p className=" text-[15px] font-sans mt-3">Step 3</p>
            <p className="text-lg font-sans font-light ">
              Submit Your Resume & Teacher Certificate
            </p>
          </div>
          <div className="text-white p-5 w-full text-start ">
            <div className="w-[50px] flex justify-center py-[10px] rounded-full  border border-white hover:bg-white hover:text-[#7839ff] ">
              {" "}
              <TfiWrite className="text-3xl  "></TfiWrite>
            </div>
            <p className=" text-[15px] font-sans mt-3">Step 4</p>
            <p className="text-lg font-sans font-light ">
              Start To Write Your Courses And Sell
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default TeacherInfoBody;
