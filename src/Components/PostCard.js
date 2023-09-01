import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  DialogBody,
  DialogHeader,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import AuthUser from "../Hooks/AuthUser";
import server_url from "../config";
import GetUserHook from "../Hooks/FetchFunction/GetUserHook";

const PostCard = () => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [open, setOpen] = React.useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);

  const navigate = useNavigate();
  const { userInfo } = AuthUser();

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/tuition").then((res) =>
      res.json().then((data) => {
        setPosts(data.data.result);
      })
    );
  }, [posts]);
  const handleOpen = () => setOpen(!open);
  return (
    <div className="">
      <div className="my-10">
        <h1 className="text-3xl text-[#7839ff] font-semibold">
          {" "}
          Available Tuitions{" "}
          <span className="font-bold"> ____________________________</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {" "}
        {posts.map((post) => (
          <Card className=" w-full rounded-lg">
            <CardBody>
              <Typography
                color="blue-gray text-[10px]"
                className="mb-2 font-bold text-[#ff6739]"
              >
                Tuition ID : {post._id}
              </Typography>
              <Typography>
                Class/Subject : <span className="font-bold">{post.class}</span>
              </Typography>
              <Typography>
                Location :<span className="font-bold">{post.location}</span>
              </Typography>
              <Typography>
                Days :{" "}
                <span className="font-bold">{post.daysPerWeek} days/week</span>
              </Typography>
              <Typography>
                Salary :{" "}
                <span className="font-bold">{post.salaryRange} /month</span>
              </Typography>
            </CardBody>

            <CardFooter className="pt-0">
              {userInfo?.role ? (
                <>
                  <Button
                    onClick={handleOpen}
                    className="mt-1 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
                    fullWidth
                  >
                    View Details
                  </Button>
                  <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0.9, y: -90 },
                    }}
                  >
                    <DialogHeader className="text-[#ff6739]">
                      Tuition ID : {post._id}
                    </DialogHeader>

                    <DialogBody divider>
                      <div className="">
                        <hr />
                        <h1 className="text-2xl text-[#7839ff] font-sans font-bold">
                          {" "}
                          Student Information
                        </h1>
                        <div className="h-1 mt-10 w-1/3 bg-[#7839ff]"></div>
                        <p className="my-2">
                          Student's Name :{" "}
                          <span className="font-bold">{post.studentName}</span>{" "}
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>

                        <p className="my-2">
                          Class :{" "}
                          <span className="font-bold">{post.class}</span>{" "}
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>

                        <p className="my-2">
                          Subject :{" "}
                          <span className="font-bold">{post.subject}</span>{" "}
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>

                        <p className="my-2">
                          Days per week :{" "}
                          <span className="font-bold">
                            {user.daysPerWeek} days/week
                          </span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>

                        <p className="my-2">
                          Background medium :{" "}
                          <span className="font-bold">
                            {user.backgroundMedium}
                          </span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>

                        <p className="my-2">
                          Gender :{" "}
                          <span className="font-bold">
                            {" "}
                            {post.studentGender}
                          </span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>

                        <p className="my-2">
                          Salary :{" "}
                          <span className="font-bold"> {post.salaryRange}</span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>

                        <p className="my-2">
                          Desired Tutor :{" "}
                          <span className="font-bold">
                            {" "}
                            {post.desiredTutor}
                          </span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>
                        <p className="my-2">
                          address:{" "}
                          <span className="font-bold"> {post.address}</span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>
                        <p className="my-2">
                          Location :{" "}
                          <span className="font-bold"> {post.location}</span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>
                        <p className="my-2">
                          Contact Number :{" "}
                          <span className="font-bold"> {post.mobile}</span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>
                        <p className="my-2">
                          Email :{" "}
                          <span className="font-bold"> {post.email}</span>
                        </p>
                        <div className=" h-[1px] bg-[#7839ff]"></div>
                      </div>
                    </DialogBody>
                  </Dialog>
                </>
              ) : (
                <Popover>
                  <PopoverHandler>
                    <Button
                      className="mt-1 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1"
                      fullWidth
                    >
                      View Details
                    </Button>
                  </PopoverHandler>
                  <PopoverContent>
                    Please login to view contact information and details.
                  </PopoverContent>
                </Popover>
              )}

              <p className="text-right text-xs mt-1">
                Posted at : {post.createdAt}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
