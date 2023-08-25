import { Button, Input } from "@material-tailwind/react";
import React from "react";
// import "./Hero.css";
import { useForm } from "react-hook-form";

const Hero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearch = (data) => {
    console.log("Search form", data);
  };
  return (
    <div className=" h-screen flex items-center justify-evenly">
      {/* <p>vaaa</p>
      <p>vaaa</p> */}
      <div className=" bg-black/20 rounded-lg ">
        {" "}
        <form onSubmit={handleSubmit(handleSearch)} className=" p-10">
          <div className="flex gap-2">
            <Input
              {...register("class")}
              color="indigo"
              label="Class"
              className=""
              type="text"
            ></Input>
            <Input
              {...register("medium")}
              color="indigo"
              label="Medium"
              className=""
              type="text"
            ></Input>
          </div>
          <div className="flex gap-2 mt-2">
            <Input
              {...register("localArea")}
              color="indigo"
              label="Local Area"
              className=""
              type="text"
            ></Input>
            <Input
              {...register("district")}
              color="indigo"
              label="District"
              className=" "
              type="text"
            ></Input>
            <Button
              type="submit"
              className="shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
              fullWidth
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <div className="">
        <h3 className="text-white/90 text-end">
          <span className="text-2xl">Welcome to</span> - <br />{" "}
          <span className="text-6xl">
            Go<span className="text-[#7839ff] font-bold">Tutor</span>
          </span>{" "}
          <br /> Your Path to Academic Excellence!
        </h3>
      </div>
    </div>
  );
};

export default Hero;