import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../../Hooks/AuthUser";
import UpdateHooks from "../../Hooks/UpdateHooks";
import server_url from "../../config";

import GetUserHook from "../../Hooks/FetchFunction/GetUserHook";
import swal from "sweetalert";

const TuitionPostForm = () => {
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);

  const navigate = useNavigate();
  const { userInfo } = AuthUser();
  console.log(userInfo?._id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   useEffect(() => {
  //     GetUserHook(BASE_URL, setUser, setIsUserLoading);
  //   }, [BASE_URL]);

  const handleTuitionPost = (data) => {
    const newData = {
      studentName: data.studentName,
      class: data.class,
      subject: data.subject,
      backgroundMedium: data.backgroundMedium,
      studentGender: data.gender,
      mobile: data.phone,
      email: data.email,
      salaryRange: data.salary,
      daysPerWeek: data.daysPerWeek,
      address: data.address,
      desiredTutor: data.desiredTutor,
      location: data.area,
    };

    fetch(`http://localhost:5000/api/v1/tuition/${userInfo._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          navigate("/");
          return swal("Good job!", "Posted", "success");
        } else if (data.error.includes("duplicate key error")) {
          return swal(
            "Oops",
            `${data.error.split(":").slice(2).join(":")}`,
            "error"
          );
        } else {
          return swal(
            "Oops",
            `${data.error.split(":").slice(2).join(":")}`,
            "error"
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error(`Request failed with status: ${res.status}`);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("Response from server:", data);
    //     if (data.modifiedCount === 1) {
    //       swal("Success", "Posted", "success");
    //       navigate("/");
    //     } else {
    //       swal(
    //         "Error",
    //         `${
    //           data.message
    //             ? data.message
    //             : data.error?.split(":").slice(2).join(":")
    //         }`,
    //         "error"
    //       );
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div className="updateInfoBg py-20 bg-[#d2d1d1] flex items-center">
      {" "}
      <div className="md:w-[75%] bg-white p-5 md:p-10 xl:p-20 xl:w-[40%] mx-auto rounded-xl">
        {" "}
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <div className="w-full">
            {userInfo ? (
              <></>
            ) : (
              <p className="text-red-500 font-sans text-xs mt-2">
                Please sign up for post
              </p>
            )}
            <h2 className="text-3xl text-[#616f93] font-medium  ">
              Request a Tutor
            </h2>
            <p className="text-gray-700/75 font-sans text-xs mt-2">
              Please fill up the form below.
            </p>
          </div>
        </div>
        {/* form start */}
        <form
          onSubmit={handleSubmit(handleTuitionPost)}
          className="pt-10 pb-0 bg-white"
        >
          <div className="mb-5">
            <Input
              {...register("studentName", { required: true })}
              variant="standard"
              className=""
              label="Student Name"
              type="text"
            ></Input>
          </div>
          <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
            {" "}
            <Input
              {...register("class", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Class"
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
              {...register("subject", { required: true })}
              variant="standard"
              className=""
              label="Subject"
              type="text"
            ></Input>
          </div>
          <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
            {" "}
            <Input
              {...register("address", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Address"
            ></Input>
            <Input
              {...register("area", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Area"
            ></Input>
          </div>
          <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
            <Input
              {...register("gender", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Gender"
            ></Input>
            <Input
              {...register("salary", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Salary Range"
            ></Input>
          </div>
          <div className="mb-5 flex gap-5 flex-wrap sm:flex-nowrap ">
            <Input
              {...register("daysPerWeek", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Days/Week"
            ></Input>
            <Input
              {...register("desiredTutor", { required: true })}
              className=""
              type="text"
              variant="standard"
              label="Desired Tutor (male/female)"
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

          {userInfo ? (
            <input
              className="py-3 w-full bg-[#616f93] mt-10 border-2 text-white border-white rounded-md  font-medium cursor-pointer"
              type="submit"
              value="Post"
            />
          ) : (
            <Button
              disabled
              className="py-3 w-full bg-[#616f93] mt-10 border-2 text-white border-white rounded-md  font-medium cursor-pointer shadow-none hover:shadow-none"
            >
              {" "}
              Post
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default TuitionPostForm;
