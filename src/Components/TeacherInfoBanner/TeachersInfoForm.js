import { Input } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import "./UpdateInfoForm.css";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const TeachersInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTeacherInfo = (data) => {
    console.log(data);
    //   CreateUserHook(data, navigate);
    //   console.log("User data", data);
  };

  return (
    <div className="updateInfoBg h-screen bg-[#d2d1d1] flex items-center">
      {" "}
      <div className="w-[75%] bg-white p-10 xl:p-20 xl:w-[40%] mx-auto rounded-xl">
        {" "}
        <div className=" flex justify-end items-center text-[#7839ff] font-sans text-sm mb-5">
          <AiOutlineDoubleLeft></AiOutlineDoubleLeft>
          <Link to="/provide-teacher-info" className="">
            {" "}
            Go back
          </Link>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full">
            <h2 className="text-3xl text-[#616f93] font-medium  ">
              Provide your information
            </h2>
            <p className="text-gray-700/75 font-sans text-xs mt-2">
              We're going to need these information to verify you as a valid{" "}
              <br />
              instructor. We hope that you'll provide us your valid
              informations.
            </p>
          </div>

          {/* <div className="border-dashed border flex items-center border-gray-400 bg-gray-100 p-2 md:p-4 w-full  rounded-lg ">
            <Input
              {...register("cv", { required: true })}
              variant="standard"
              className=" w-1/2 overflow-hidden"
              label="Upload your CV"
              type="file"
            ></Input>
          </div> */}
        </div>
        {/* form start */}
        <form
          onSubmit={handleSubmit(handleTeacherInfo)}
          className="pt-10 pb-0 bg-white"
        >
          <div clas sName=" flex justify-end">
            {" "}
            <div className="border-dashed border w-1/2  border-gray-400 bg-gray-100 p-2 md:p-4 flex just  rounded-lg ">
              <Input
                {...register("cv", { required: true })}
                variant="standard"
                className=" overflow-hidden"
                label="Upload your CV"
                type="file"
              ></Input>
            </div>
          </div>
          <div className="mb-5">
            <Input
              {...register("institution", { required: true })}
              variant="standard"
              className=""
              label="Institution"
              type="text"
            ></Input>
          </div>
          <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
            {" "}
            <Input
              {...register("department", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Department"
            ></Input>
            <Input
              {...register("backgroundMedium", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Background Medium"
            ></Input>
          </div>
          <div className="mb-5">
            <Input
              {...register("qualification", { required: true })}
              variant="standard"
              className=""
              label="Qualification"
              type="text"
            ></Input>
          </div>
          <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap">
            <Input
              {...register("email", { required: true })}
              variant="standard"
              className=""
              label="Email"
              type="email"
            ></Input>
            <Input
              {...register("phone", { required: true })}
              variant="standard"
              className=""
              label="Mobile Number"
              type="Number"
            ></Input>
          </div>
          <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
            {" "}
            <Input
              {...register("presentLocation", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Present Location"
            ></Input>
            <Input
              {...register("permanentAddress", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Permanent address"
            ></Input>
          </div>

          <input
            className="py-3 w-full bg-[#616f93] mt-10 border-2 text-white border-white rounded-md  font-medium cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default TeachersInfoForm;
