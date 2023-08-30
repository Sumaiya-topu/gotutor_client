import { Button, Input, Option, Select } from "@material-tailwind/react";
import React from "react";
// import "./Hero.css";
import { useForm } from "react-hook-form";

const Hero = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const selectedOption = watch("backgroundMedium");

  const handleSearch = (data) => {
    console.log("Search form", data);
  };
  return (
    <div className="">
      <div className="">
        <div className=" h-[600px] flex gap-10  w-2/3 mx-auto">
          {/* <p>vaaa</p>
      <p>vaaa</p> */}
          <div className="flex items-center  w-full">
            <div className=" bg-black/20 rounded-lg w-full ">
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
                  <div className="w-72">
                    <Select
                      {...register("backgroundMedium")}
                      label="Select Medium"
                      animate={{
                        mount: { y: 0 },
                        unmount: { y: 25 },
                      }}
                    >
                      <Option value="bangla">Bangla Medium</Option>
                      <Option value="englishMedium">English Medium</Option>
                      <Option
                        value="englishVersion"
                        {...register("englishVersion")}
                      >
                        English Version
                      </Option>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  <Input
                    {...register("localArea")}
                    color="indigo"
                    label="Local Area"
                    className=""
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
          </div>
          <div className="mt-36 ">
            <h3 className="text-white/90 text-end font-sans">
              <span className="text-3xl">Welcome to</span> - <br />{" "}
              <span className="text-6xl ">
                Go<span className="text-[#7839ff] font-bold">Tutor</span>
              </span>{" "}
            </h3>
            <p className="text-white/90 mt-5 text-end">
              <span className="text-xl font-sans">Your Path to Academic</span>{" "}
              <br />{" "}
              <span className="text-7xl text-[#ff6739] font-semibold font-serif">
                {" "}
                Excellence!
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
