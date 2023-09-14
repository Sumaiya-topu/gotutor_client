import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
// import "./Hero.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import TutorSearchResult from "../TutorSearchResult/TutorSearchResult";
import AuthUser from "../../Hooks/AuthUser";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Hero = () => {
  const [tutors, setTutors] = useState([]);
  const [toggleopen, setToggleOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { userInfo } = AuthUser();

  const handleOpen = () => setOpen(!open);
  const toggleOpen = () => setToggleOpen((cur) => !cur);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSearch = (data) => {
    console.log("Search form", data);
    fetch(
      `https://go-tutor-server.zayedabdullah.com/api/v1/users?searchTerm=${data.searchBox}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Search data", data.data.data.result);
        setTutors(data.data.data.result);
      });
  };
  return (
    <div className="">
      <div className="">
        <div className=" h-[600px] flex flex-wrap md:flex-nowrap gap-10 w-11/12 xl:w-2/3 mx-auto">
          {/* <p>vaaa</p>
      <p>vaaa</p> */}
          <div className="flex items-center   w-full">
            <div className=" bg-black/20 rounded-lg w-full ">
              {" "}
              <div className="mt-10 ml-10">
                {" "}
                <h1 className=" text-[#ff6739] text-2xl ">
                  Search for Teacher{" "}
                </h1>
                <p className="text-white/50 text-sm">
                  (According to subjects, areas, classes){" "}
                </p>
              </div>
              <form onSubmit={handleSubmit(handleSearch)} className=" p-10">
                <div className="flex gap-2 flex-wrap md:flex-nowrap">
                  <Input
                    {...register("searchBox")}
                    color="indigo"
                    label="Search here"
                    className=""
                    type="text"
                  ></Input>
                  <Button
                    onClick={handleOpen}
                    type="submit"
                    className="shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
                  >
                    Search
                  </Button>
                  <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0.9, y: -100 },
                    }}
                  >
                    <DialogHeader>Your Search Result</DialogHeader>
                    <div className="grid grid-cols-2">
                      {tutors.length !== 0 ? (
                        tutors.map((tutor) => (
                          <>
                            <DialogBody divider className="">
                              <div>
                                {" "}
                                <Card
                                  color="transparent"
                                  shadow={false}
                                  className="w-full pr-10"
                                >
                                  <CardHeader
                                    color="transparent"
                                    floated={false}
                                    shadow={false}
                                    className="mx-0 flex items-center gap-4 pt-0 pb-8 borders"
                                  >
                                    <Avatar
                                      size="lg"
                                      variant="circular"
                                      src={tutor.imageURL}
                                      alt={tutor.fullName}
                                    />
                                    <div className="flex w-full flex-col gap-0.5">
                                      <div className="flex items-center justify-between">
                                        <Typography
                                          variant="h5"
                                          color="blue-gray"
                                        >
                                          {tutor.fullName}
                                        </Typography>
                                        <div className="5 flex items-center gap-0">
                                          <StarIcon />
                                          <StarIcon />
                                          <StarIcon />
                                          <StarIcon />
                                          <StarIcon />
                                        </div>
                                      </div>
                                      <Typography color="blue-gray">
                                        {tutor.address} ||{" "}
                                        {tutor.expectedSalary}
                                        tk/month
                                      </Typography>
                                    </div>
                                  </CardHeader>
                                  <CardBody className="mb-6 p-0 ml-5">
                                    <Typography>
                                      Expertise :{" "}
                                      <span className="font-bold">
                                        {" "}
                                        {tutor.preferredSubject}{" "}
                                      </span>{" "}
                                      <br />
                                    </Typography>
                                    {tutor?.areaCovered ? (
                                      <Typography>
                                        Area Covered :{" "}
                                        <span className="font-bold">
                                          {tutor.areaCovered}
                                        </span>
                                      </Typography>
                                    ) : (
                                      <></>
                                    )}

                                    {userInfo?.role ? (
                                      <div className="flex justify-end">
                                        {" "}
                                        <Link
                                          to={`/search-profile/${tutor._id}`}
                                        >
                                          <Button className="mt-1 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1">
                                            {" "}
                                            View Details
                                          </Button>
                                        </Link>
                                      </div>
                                    ) : (
                                      <div className="mt-3 flex justify-end">
                                        <div>
                                          {" "}
                                          <Button
                                            onClick={toggleOpen}
                                            className="mt-1 shadow-none bg-[#7839ff] py-1 hover:shadow-none hover:-translate-y-1"
                                          >
                                            {" "}
                                            View Details
                                          </Button>
                                          <Collapse open={toggleOpen}>
                                            <Typography className="text-red-500 text-xs">
                                              <Link to="/login"> Login</Link> to
                                              View {tutor.fullName}
                                              's profile and resume
                                            </Typography>
                                          </Collapse>
                                        </div>
                                      </div>
                                    )}
                                  </CardBody>
                                </Card>
                              </div>
                            </DialogBody>
                          </>
                        ))
                      ) : (
                        <DialogBody> No such result</DialogBody>
                      )}
                    </div>
                  </Dialog>
                </div>
              </form>
              {/* <TutorSearchResult tutors={tutors}></TutorSearchResult> */}
            </div>
          </div>
          <div className="lg:mt-36  w-full">
            <h3 className="text-white/90 text-end font-sans">
              <span className="text-lg md:text-3xl">Welcome to</span> - <br />{" "}
              <span className="text-4xl md:text-6xl ">
                Go<span className="text-[#7839ff] font-bold">Tutor</span>
              </span>{" "}
            </h3>
            <p className="text-white/90 mt-5 text-end">
              <span className="text-xl font-sans">Your Path to Academic</span>{" "}
              <br />{" "}
              <span className="text-4xl md:text-5xl lg:text-7xl text-[#ff6739] font-semibold font-serif">
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
