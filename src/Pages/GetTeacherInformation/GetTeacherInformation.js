import React from "react";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import TeacherInfoBanner from "../../Components/TeacherInfoBanner/TeacherInfoBanner";
import "./GetTeacherInformation.css";
const GetTeacherInformation = () => {
  return (
    <div className="TeacherInfoBanner h-screen">
      <ComplexNavbar></ComplexNavbar>
      <TeacherInfoBanner></TeacherInfoBanner>
    </div>
  );
};

export default GetTeacherInformation;
