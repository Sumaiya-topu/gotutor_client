import React, { useEffect, useState } from "react";
import { singleImageUpload } from "../../../Hooks/ImageUpload";
import AuthUser from "../../../Hooks/AuthUser";
import server_url from "../../../config";
import GetUserHook from "../../../Hooks/FetchFunction/GetUserHook";
import Loader from "../../../ReusableComponents/Loader";
import UpdateHooks from "../../../Hooks/UpdateHooks";
import { useForm } from "react-hook-form";
import { BiSolidEdit } from "react-icons/bi";
import {
  Avatar,
  Card,
  CardBody,
  Collapse,
  List,
  ListItem,
  ListItemPrefix,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import Footer from "../../../Components/Footer";
import ComplexNavbar from "../../../Components/Navbar/ComplexNavbar";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [user, setUser] = useState({});
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const { userInfo } = AuthUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const BASE_URL = `${server_url}/users/${userInfo?._id}`;

  useEffect(() => {
    GetUserHook(BASE_URL, setUser, setIsUserLoading);
  }, [BASE_URL]);

  useEffect(() => {
    setImageUrl(user?.imageURL);
  }, [user]);

  console.log("user role from profile", user?.role);

  const handleUploadImage = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    singleImageUpload(formData, setImageUrl);
  };

  const handleChangeUploadImage = (data) => {
    console.log("image data", data);
    const newImage = {
      imageURL: imageUrl,
    };

    UpdateHooks(BASE_URL, newImage, true, "Profile picture updated");
  };

  // if (isUserLoading) {
  //   return <Loader></Loader>;
  // }

  return (
    <div>
      <ComplexNavbar></ComplexNavbar>
      <div className="w-2/3  mx-auto">
        <div className=" h-48 bg-[#D9D9D9]  rounded-b-lg"></div>
        <div>
          <div className="-mt-12 flex items-center justify-between">
            <div className="flex gap-x-2  items-end">
              {imageUrl ? (
                <img
                  className=" rounded-full w-36 h-36 border-4 border-[#f5f8ff]"
                  src={imageUrl}
                  alt="This is profile pic"
                />
              ) : (
                <img
                  className="rounded-full w-36 border-4 border-[#f5f8ff]"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnHCfhPKKAy1zSl8__FmI1hsMmSR-MVgh5IcfD_-43Q&s"
                  }
                  alt="This is profile pic"
                />
              )}
              <div>
                <form onSubmit={handleSubmit(handleChangeUploadImage)}>
                  <input
                    {...register("imageUrl")}
                    onChange={handleUploadImage}
                    type={"file"}
                    className=" py-2 px-5 text-white bg-[#D9D9D9] font-medium rounded-md mt-4"
                  />
                  <button
                    type="submit"
                    className="text-xs py-2 px-5 mt-2 block bg-gradient-to-r bg-[#7839ff] rounded-md text-white font-medium cursor-pointer"
                  >
                    Change
                  </button>
                </form>
              </div>
            </div>
            <div>
              <div className="">
                <Link to="/update-your-info">
                  <div className="flex items-center -mt-5">
                    <BiSolidEdit></BiSolidEdit>
                    <p className="">Update Info</p>
                  </div>
                </Link>
              </div>
              {user?.role === "tutor" ? (
                <button className="py-2 px-10  bg-gradient-to-r bg-[#7839ff] rounded-md text-white font-medium cursor-pointer mt-5">
                  Resume
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
          <h2 className="text-xl font-semibold mt-5">{user?.fullName}</h2>
        </div>
        {user?.role === "tutor" ? (
          <div>
            <div>
              <div className="flex">
                <div className=" w-[150px]">
                  {" "}
                  <h3 className="text-black/40 font-bold">
                    ID #{user.memberId}.
                  </h3>
                </div>
                {/* contact info section */}
                <Popover placement="right">
                  <PopoverHandler>
                    <p className="text-red-500 hover:text-black">Contact</p>
                  </PopoverHandler>
                  <PopoverContent className="w-72">
                    <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                      <Avatar src={imageUrl} alt="tania andrew" />
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {user.fullName}
                        </Typography>
                      </div>
                    </div>
                    <List className="p-0">
                      <a href="#" className="text-initial">
                        <ListItem>
                          <ListItemPrefix>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </ListItemPrefix>
                          {user.phone}
                        </ListItem>
                      </a>
                      <a href="#" className="text-initial">
                        <ListItem>
                          <ListItemPrefix>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-5 w-5"
                            >
                              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                          </ListItemPrefix>
                          {user?.email}
                        </ListItem>
                      </a>
                    </List>
                  </PopoverContent>
                </Popover>
              </div>
              {user?.experience ? (
                <h1>
                  Experience : Having {user.experience} experience as a home
                  tutor.
                </h1>
              ) : (
                <></>
              )}
              <p>
                Qualification :{" "}
                <span className="font-bold">{user?.qualification}</span>{" "}
              </p>
              <p>
                Area Covered :{" "}
                <span className="font-bold">{user.areaCovered}</span>
              </p>
            </div>
            <div className="mt-20">
              <hr />
              <div className="h-1 w-1/3 bg-[#7839ff]"></div>
              <p className="my-2">
                Expected minimum salary :{" "}
                <span className="font-bold">{user?.expectedSalary}/month</span>{" "}
              </p>
              <div className=" h-[1px] bg-[#7839ff]"></div>
              <p className="my-2">
                Days per week :{" "}
                <span className="font-bold">{user?.daysPerWeek} days/week</span>
              </p>
              <div className=" h-[1px] bg-[#7839ff]"></div>
              <p className="my-2">
                Preferred medium :{" "}
                <span className="font-bold">{user?.preferredMedium}</span>
              </p>
              <div className=" h-[1px] bg-[#7839ff]"></div>
              <p className="my-2">
                Preferred areas :{" "}
                <span className="font-bold"> {user?.preferredArea}</span>
              </p>
              <div className=" h-[1px] bg-[#7839ff]"></div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyProfile;
