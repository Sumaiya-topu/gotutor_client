import { Input } from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./UpdateInfoForm.css";

const UpdateInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateUser = (data) => {
    console.log("updated data", data);
  };
  return (
    <div className=" h-screen flex items-center">
      <div className=" w-[100%]  ">
        <div className="w-[75%] lg:w-[50%] mx-auto">
          <h2 className="text-2xl font-medium  ">Update your Profile</h2>
          {/*form start */}
          <form
            onSubmit={handleSubmit(handleUpdateUser)}
            className="pt-10 pb-0 "
          >
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

            <input
              className="py-3 w-full bg-[#616f93] mt-10 border-2 text-white border-white rounded-md  font-medium cursor-pointer"
              type="submit"
              value="Submit"
            />
          </form>

          {/*form end */}
        </div>
      </div>
    </div>
  );
};

export default UpdateInfoForm;
