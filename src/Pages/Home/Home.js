import React from "react";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import Footer from "../../Components/Footer";
const Home = () => {
  return (
    <div className=" heroBg">
      <ComplexNavbar></ComplexNavbar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
};

export default Home;
