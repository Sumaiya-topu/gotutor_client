import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComplexNavbar from "./Navbar/ComplexNavbar";
import Footer from "./Footer";

const TuitionPostDetails = () => {
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://go-tutor-server.zayedabdullah.com/api/v1/tuition/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.data);
        console.log(details);
      });
  }, [id]);
  return (
    <div>
      <ComplexNavbar></ComplexNavbar>{" "}
      <div className="md:w-3/4 lg:w-1/2 mx-auto mt-20 shadow-lg md:px-10 lg:py-14">
        <DialogHeader className="">
          <h1 className="text-2xl text-[#7839ff] font-sans font-bold">
            {" "}
            Student Information
          </h1>
        </DialogHeader>

        <div className="px-5">
          <hr />
          <h1 className="text-[#ff6739]">Tuition ID : {details._id}</h1>
          <div className="h-1 mt-10 w-1/3 bg-[#7839ff]"></div>
          <p className="my-2">
            Student's Name :{" "}
            <span className="font-bold">{details.studentName}</span>{" "}
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Class : <span className="font-bold">{details.class}</span>{" "}
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Subject : <span className="font-bold">{details.subject}</span>{" "}
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Days per week :{" "}
            <span className="font-bold">{details.daysPerWeek} days/week</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Background medium :{" "}
            <span className="font-bold">{details.backgroundMedium}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Gender : <span className="font-bold"> {details.studentGender}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Salary : <span className="font-bold"> {details.salaryRange}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Desired Tutor :{" "}
            <span className="font-bold"> {details.desiredTutor}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            address: <span className="font-bold"> {details.address}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Location : <span className="font-bold"> {details.location}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Contact Number :{" "}
            <span className="font-bold"> {details.mobile}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
          <p className="my-2">
            Email : <span className="font-bold"> {details.email}</span>
          </p>
          <div className=" h-[1px] bg-[#7839ff]"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TuitionPostDetails;
