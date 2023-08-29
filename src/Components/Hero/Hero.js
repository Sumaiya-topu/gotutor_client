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
      <div className=" w-2/3 mx-auto">
        <div className="flex justify-center ">
          <div className="w-full flex items-end ">
            <div>
              <h1 className=" text-5xl font-serif text-white/90 mr-7 mb-5 text-right">
                Why Choose Us?
              </h1>
              <div className="bg-white/90  ">
                <p className="px-10 pt-10 pb-[100px] text-right font-sans text-black/80   ">
                  We are providing the best teachers.{" "}
                  <span className="text-[#7839ff] text-xl">
                    Around 200 users have <br /> chosen us.
                  </span>{" "}
                  We are nurturing our teachers by providing batches to reach
                  them to their desired audiance.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 w-full bg-[#7839ff] rounded-t-lg ">
            <div className=" text-white/90 pl-10 pt-10 font-sans  ">
              <h3 className="text-xl mb-3">Expert Educators:</h3>
              <p className=" text-justify">
                Our team of experienced and dedicated educators are experts in
                their respective fields. They are passionate about teaching and
                are committed to helping you grasp even the most complex
                concepts.
              </p>
            </div>
            <div className=" text-white/90 pr-10 pt-10 font-sans ">
              <h3 className="text-xl mb-3">Personalized Learning:</h3>
              <p className=" text-justify">
                We understand that every student has unique learning needs.
                That's why we tailor our teaching approach to suit your
                individual pace, learning style, and goals. Your success is our
                priority.
              </p>
            </div>{" "}
            <div className=" text-white/90 pl-10 pb-10 font-sans">
              <h3 className="text-xl mb-3">Comprehensive Curriculum:</h3>
              <p className=" text-justify">
                Our meticulously designed curriculum covers a wide range of
                subjects and topics. From foundational concepts to advanced
                lessons, we've got you covered.
              </p>
            </div>{" "}
            <div className=" text-white/90 pb-10 pr-10 font-sans">
              <h3 className="text-xl mb-3">Supportive Environment:</h3>
              <p className=" text-justify">
                Beyond academics, we foster a supportive and motivating
                environment. We believe in nurturing not only intellectual
                growth but also personal development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
