import { Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./UpdateInfoForm.css";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../../Hooks/AuthUser";
import UpdateHooks from "../../Hooks/UpdateHooks";
import server_url from "../../config";
import { singleImageUpload } from "../../Hooks/ImageUpload";
import GetUserHook from "../../Hooks/FetchFunction/GetUserHook";
import ComplexNavbar from "../Navbar/ComplexNavbar";
import Footer from "../Footer";

const TeachersInfoForm = () => {
  const [cvFile, setCvFile] = useState(null);
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  const navigate = useNavigate();
  const { userInfo } = AuthUser();
  const BASE_URL = `${server_url}/users/${userInfo?._id}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // useEffect(() => {
  //   GetUserHook(BASE_URL, setUser, setIsUserLoading);
  // }, [BASE_URL]);

  useEffect(() => {
    setCvFile(user?.cvFile);
  }, [user]);

  const handleUploadCv = async (event) => {
    const cv = event.target.files[0];
    // Store the selected CV file in state
    const formData = new FormData();
    formData.append("image", cv);
    //calling the api function to uplaod the cv
    singleImageUpload(formData, setCvFile);
  };

  console.log("User from info form", userInfo);

  const handleTeacherInfo = (data) => {
    console.log(data);
    const newData = {
      role: "tutor",
      cv: cvFile,
      phone: data.phone,
      institution: data.institution,
      department: data.department,
      backgroundMedium: data.backgroundMedium,
      qualification: data.qualification,
      preferredArea: data.preferredArea,
      preferredSubject: data.preferredSubject,
      preferredClass: data.preferredClass,
      expectedSalary: data.expectedSalary,
      preferredMedium: data.preferredMedium,
      daysPerWeek: data.daysPerWeek,
      experience: data.experience,
      areaCovered: data.coveredArea,
    };

    UpdateHooks(BASE_URL, newData, true, "Information Submitted");
    navigate("/my-profile");
  };

  return (
    <div className="w-full mx-auto">
      <ComplexNavbar></ComplexNavbar>{" "}
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
                  {...register("cv")}
                  variant="standard"
                  className=" overflow-hidden"
                  label="Upload your CV"
                  onChange={handleUploadCv}
                  type="file"
                ></Input>
              </div>
            </div>
            <div className="mb-5">
              <Input
                {...register("institution")}
                variant="standard"
                className=""
                label="Institution"
                type="text"
              ></Input>
            </div>
            <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
              {" "}
              <Input
                {...register("department")}
                className=""
                type="text"
                variant="standard"
                label="Department"
              ></Input>
              <Input
                {...register("backgroundMedium")}
                className=""
                type="text"
                variant="standard"
                label="Background Medium"
              ></Input>
            </div>
            <div className="mb-5">
              <Input
                {...register("qualification")}
                variant="standard"
                className=""
                label="Qualification"
                type="text"
              ></Input>
            </div>
            <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap">
              {/* <Input
              {...register("email")}
              variant="standard"
              className=""
              label="Email"
              type="email"
            ></Input> */}
              <Input
                {...register("phone")}
                variant="standard"
                className=""
                label="Mobile Number"
                type="Number"
              ></Input>
            </div>
            <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
              {" "}
              <Input
                {...register("presentLocation")}
                className=""
                type="text"
                variant="standard"
                label="Preffered area"
              ></Input>
              <Input
                {...register("preferredClass")}
                className=""
                type="text"
                variant="standard"
                label="Preferred class"
              ></Input>
            </div>
            <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
              <Input
                {...register("preferredSubject")}
                className=""
                type="text"
                variant="standard"
                label="Preferred subject"
              ></Input>
              <Input
                {...register("expectedSalary")}
                className=""
                type="text"
                variant="standard"
                label="Expected salary"
              ></Input>
            </div>
            <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
              <Input
                {...register("preferredMedium")}
                className=""
                type="text"
                variant="standard"
                label="Preferred medium"
              ></Input>
              <Input
                {...register("daysPerWeek")}
                className=""
                type="text"
                variant="standard"
                label="Days/Week"
              ></Input>
            </div>
            <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
              <Input
                {...register("experience")}
                className=""
                type="text"
                variant="standard"
                label="Experience (If any)"
              ></Input>
              <Input
                {...register("coveredArea")}
                className=""
                type="text"
                variant="standard"
                label="Area Covered (If any)"
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
      <Footer></Footer>
    </div>
  );
};

export default TeachersInfoForm;
