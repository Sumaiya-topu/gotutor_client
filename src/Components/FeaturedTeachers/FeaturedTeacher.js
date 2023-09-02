/* eslint-disable react/jsx-key */
// import AvailableBookCard from "../../Home/AvailableBooks/AvailableBookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { AiOutlineDoubleRight } from "react-icons/ai";
// import required modules
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import sumaiya from "../../assets/teachers/50022269_1186464268171127_4856065706199875584_n.jpg";
import topu from "../../assets/teachers/topu.jpg";
import maria from "../../assets/teachers/maria.jpg";
import monisha from "../../assets/teachers/Kamronnahar_Monisha_.jpg";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FeaturedTeacher = () => {
  const [demoData, setDemoData] = useState([
    {
      image: maria,
      name: "Maria Rahman",
    },
    {
      image: sumaiya,
      name: "Sumaiya Jahan",
    },
    {
      image: topu,
      name: "Sumaiya Topu",
    },
    {
      image: monisha,
      name: "Kamronnahar Monisha",
    },
  ]);
  // console.log("demoData", demoData);

  //   useEffect(() => {
  //     async function fetchDemoData() {
  //       try {
  //         const response = await fetch("DemoData/book.json"); // Fetch data from public folder
  //         const data = await response.json();
  //         setDemoData(data);
  //       } catch (error) {
  //         console.error("Error fetching demo data:", error);
  //       }
  //     }

  //     fetchDemoData();
  //   }, []);

  return (
    <div className="  pt-20 ">
      <div className="xl:w-2/3 p-20 bg-white rounded-t-lg  mx-auto flex gap-x-10 flex-wrap lg:flex-nowrap">
        <div className="flex items-center ">
          {" "}
          <div>
            <h1 className="text-black/80 text-3xl font-semibold">
              This weeks <br />{" "}
              <span className=" text-5xl text-[#7839ff]">
                Featured teachers
              </span>
            </h1>
            <p className="text-black/80">
              Every week we feature our most engaged tuotor.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  ">
          {demoData?.map((data, i) => (
            <div className="">
              <Card className=" lg:w-80 shadow-none hover:translate-y-2 duration-300">
                <CardHeader floated={false} className="md:h-60 rounded-none">
                  <img src={data.image} alt="" />
                </CardHeader>
                <CardBody className="text-center">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {data.name}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTeacher;
