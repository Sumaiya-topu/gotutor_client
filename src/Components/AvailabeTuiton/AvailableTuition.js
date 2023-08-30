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
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SimilarBooks = () => {
  const [demoData, setDemoData] = useState([
    {
      id: 552258,
      class: "Nursery , All Subject",
      location: "Mohammadpur",
      days: "5 days/week",
      salary: "5000-6000 tk/month",
      postedOn: "24 Aug, 2023 07:57 PM",
    },
    {
      id: 552258,
      class: "Nursery , All Subject",
      location: "Mohammadpur",
      days: "5 days/week",
      salary: "5000-6000 tk/month",
      postedOn: "24 Aug, 2023 07:57 PM",
    },
    {
      id: 552258,
      class: "Nursery , All Subject",
      location: "Mohammadpur",
      days: "5 days/week",
      salary: "5000-6000 tk/month",
      postedOn: "24 Aug, 2023 07:57 PM",
    },
    {
      id: 552258,
      class: "Nursery , All Subject",
      location: "Mohammadpur",
      days: "5 days/week",
      salary: "5000-6000 tk/month",
      postedOn: "24 Aug, 2023 07:57 PM",
    },
    {
      id: 552258,
      class: "Nursery , All Subject",
      location: "Mohammadpur",
      days: "5 days/week",
      salary: "5000-6000 tk/month",
      postedOn: "24 Aug, 2023 07:57 PM",
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
    <div className="bg-white/90">
      <div className="bg-[#7839ff] w-2/3 mx-auto p-20 rounded-b-lg">
        <h1 className="text-3xl text-white font-semibold">
          {" "}
          Available Tuitions{" "}
          <span className="font-bold"> ____________________________</span>
        </h1>
        <Swiper
          width={848}
          slidesPerView={1}
          spaceBetween={25}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {demoData?.map((data, i) => (
            <SwiperSlide>
              <Card className="mt-6 w-80 rounded">
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    Tuition ID : {data.id}
                  </Typography>
                  <Typography>
                    Class/Subject :{" "}
                    <span className="font-bold">{data.class}</span>
                  </Typography>
                  <Typography>
                    Location :<span className="font-bold">{data.location}</span>
                  </Typography>
                  <Typography>
                    Days : <span className="font-bold">{data.days}</span>
                  </Typography>
                  <Typography>
                    Salary : <span className="font-bold">{data.salary}</span>
                  </Typography>
                </CardBody>

                <CardFooter className="pt-0">
                  <Button
                    className="mt-1 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
                    fullWidth
                  >
                    View Details
                  </Button>
                  <p className="text-right text-xs mt-1">
                    Posted at : {data.postedOn}
                  </p>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hover:translate-x-1 duration-300 mt-5">
          <Link to="/all-tuitions" className="text-white  ">
            View all tuitions{" "}
            <AiOutlineDoubleRight className="inline"></AiOutlineDoubleRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SimilarBooks;
