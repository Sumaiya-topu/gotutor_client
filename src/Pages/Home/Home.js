import React from "react";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";

const Home = () => {
  return (
    <div className=" heroBg">
      <ComplexNavbar></ComplexNavbar>
      <Hero></Hero>
    </div>
  );
};

export default Home;
