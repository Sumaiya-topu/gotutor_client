import React, { useEffect, useState } from "react";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import Footer from "../../Components/Footer";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Collapse,
  Typography,
} from "@material-tailwind/react";
import AuthUser from "../../Hooks/AuthUser";
import { Link } from "react-router-dom";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);

  const { userInfo } = AuthUser();
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users/by-role").then((res) =>
      res.json().then((data) => {
        setTutors(data);
        // console.log(data);
      })
    );
  }, [tutors]);
  //   console.log(tutors);
  return (
    <div>
      <ComplexNavbar></ComplexNavbar>
      <div className="xl:w-2/3 md:w-3/4 mx-auto">
        <div className="my-10">
          <h1 className="text-3xl text-[#7839ff] font-semibold">
            {" "}
            Our Respected Tutors{" "}
            <span className="font-bold"> ____________________________</span>
          </h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {tutors?.map((tutor, i) => (
            <Card
              color="transparent"
              shadow={false}
              className="w-full p-10 shadow-lg "
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
                    <Typography variant="h5" color="blue-gray">
                      {tutor.fullName}
                    </Typography>
                    <div className="5 flex items-center gap-0">
                      {/* <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon /> */}
                    </div>
                  </div>
                  <Typography color="blue-gray">
                    {tutor.address} || {tutor.expectedSalary}
                    tk/month
                  </Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0 ml-5">
                <Typography>
                  Expertise :{" "}
                  <span className="font-bold"> {tutor.preferredSubject} </span>{" "}
                  <br />
                </Typography>
                {tutor?.areaCovered ? (
                  <Typography>
                    Area Covered :{" "}
                    <span className="font-bold">{tutor.areaCovered}</span>
                  </Typography>
                ) : (
                  <></>
                )}

                {userInfo ? (
                  <>
                    <Link to={`/search-profile/${tutor._id}`}>
                      <Button className="mt-1 shadow-none bg-[#7839ff] hover:shadow-none hover:-translate-y-1">
                        {" "}
                        View Details
                      </Button>
                    </Link>
                  </>
                ) : (
                  <div className="mt-3">
                    <Button className="mt-1 shadow-none bg-[#7839ff] py-1 hover:shadow-none hover:-translate-y-1">
                      {" "}
                      View Details
                    </Button>

                    <Typography className="text-red-500 text-xs">
                      <Link to="/login"> Login</Link> to View {tutor.fullName}
                      's profile and resume
                    </Typography>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TutorsPage;
