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
  Popover,
  PopoverContent,
  PopoverHandler,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import AuthUser from "../../Hooks/AuthUser";

const AvailableTuition = () => {
  const [posts, setPosts] = useState([]);
  const { userInfo } = AuthUser();
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tuition").then((res) =>
      res.json().then((data) => {
        setPosts(data.data.result);
      })
    );
  }, [posts]);

  return (
    <div className="">
      <div className="bg-[#7839ff] xl:w-2/3 mx-auto p-20 rounded-b-lg">
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
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {posts?.map((data, i) => (
            <SwiperSlide>
              <Card className="mt-6 w-96 lg:w-80 rounded">
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
                  {userInfo ? (
                    <>
                      <Link to={`/tuition-post/${data._id}`}>
                        <Button className="mt-1 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1">
                          {" "}
                          View Details
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Tooltip
                      content="Sign in to view contact information"
                      placement="top"
                    >
                      <Button
                        className="mt-1 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
                        fullWidth
                      >
                        {" "}
                        View Details
                      </Button>
                    </Tooltip>
                  )}

                  <p className="text-right text-xs mt-1">
                    Posted at : {data.createdAt}
                  </p>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hover:translate-x-1 duration-300 mt-5">
          <Link to="/tuition-posts" className="text-white  ">
            View all tuitions{" "}
            <AiOutlineDoubleRight className="inline"></AiOutlineDoubleRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableTuition;
