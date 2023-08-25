import { Button, Input } from "@material-tailwind/react";
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className=" heroBg h-screen flex items-center">
      <div className=" w-1/2 mx-auto bg-black/20 rounded-lg ">
        {" "}
        <form action="" className=" p-10">
          <div className="flex gap-2">
            <Input
              //   {...register("institution", { required: true })}
              color="indigo"
              label="Class"
              className=""
              type="text"
            ></Input>
            <Input
              //   {...register("institution", { required: true })}
              color="indigo"
              label="Medium"
              className=""
              type="text"
            ></Input>
          </div>
          <div className="flex gap-2 mt-2">
            <Input
              //   {...register("institution", { required: true })}
              color="indigo"
              label="Local Area"
              className=""
              type="text"
            ></Input>
            <Input
              //   {...register("institution", { required: true })}
              color="indigo"
              label="District"
              className=""
              type="text"
            ></Input>
            <Button
              className="shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
              fullWidth
            >
              Search
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
