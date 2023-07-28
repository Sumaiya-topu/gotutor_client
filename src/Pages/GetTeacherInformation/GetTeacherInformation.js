import React from "react";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import TeacherInfoBanner from "../../Components/TeacherInfoBanner/TeacherInfoBanner";
import "./GetTeacherInformation.css";
import TeacherInfoBody from "../../Components/TeacherInfoBanner/TeacherInfoBody";
const GetTeacherInformation = () => {
  return (
    <div className="TeacherInfoBanner h-screen">
      <ComplexNavbar></ComplexNavbar>
      <TeacherInfoBanner></TeacherInfoBanner>
      <TeacherInfoBody></TeacherInfoBody>
    </div>
  );
};

export default GetTeacherInformation;
