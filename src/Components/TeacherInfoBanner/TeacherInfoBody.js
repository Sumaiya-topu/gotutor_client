import React from "react";
import { FaWpforms } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { GiAchievement } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import "./TeacherInfoBody.css";
import {
  Button,
  Card,
  Checkbox,
  Input,
  Textarea,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import AuthUser from "../../Hooks/AuthUser";

const TeacherInfoBody = () => {
  const { userInfo } = AuthUser();
  return (
    <div className="infoBodyBg relative  mt-10">
      {/* information section */}
      <div className="relative  -top-[120px]">
        <div className=" w-3/4 xl:w-9/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#7839ff] p-5 xl:py-10 rounded-xl">
          <div className="text-white p-5 w-full text-start md:border-r border-[#b799f86b]">
            {userInfo ? (
              <Link
                to="/update-your-info"
                className="w-[50px] flex justify-center py-[10px] rounded-full  border border-white hover:bg-white hover:text-[#7839ff] "
              >
                {" "}
                <FaWpforms className="text-3xl  "></FaWpforms>
              </Link>
            ) : (
              <Tooltip
                content="Sign in to become a teacher"
                placement="right-end"
              >
                <div className="w-[50px] flex justify-center py-[10px] rounded-full  border border-white hover:bg-white hover:text-[#7839ff] ">
                  <FaWpforms className="text-3xl  "></FaWpforms>
                </div>
              </Tooltip>
            )}

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
      {/* information section end */}
      {/* more detailed contact */}
      <div className="h-[70vh] sm:h-[60vh]  w-9/12 xl:w-1/2 mx-auto relative ">
        <div className=" absolute grid lg:grid-cols-2 gap-10">
          {" "}
          <div className=" lg:mt-20 text-start">
            <h1 className="text-2xl lg:text-3xl font-sans">
              Please Tell Us More About Your Major And Experience.
            </h1>
            <p className="mt-5">
              Create an account and fill up the information form to become a
              tutor. For any further query please contact us.
            </p>
          </div>
          <div>
            <Card color="transparent" shadow={false}>
              <form className="lg:mt-8 mb-2  max-w-screen-lg">
                <div className="mb-4 flex flex-col gap-6">
                  <Input size="lg" label="Name" />
                  <Input size="lg" label="Email" />
                  <Textarea></Textarea>
                </div>
                <Button
                  className="mt-6 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
                  fullWidth
                >
                  Send
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TeacherInfoBody;
