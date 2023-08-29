import React from "react";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import Footer from "../../Components/Footer";
import NewConcept from "../../Components/NewConcept/NewConcept";
const Home = () => {
  return (
    <div className=" heroBg">
      <ComplexNavbar></ComplexNavbar>
      <Hero></Hero>
      <NewConcept></NewConcept>
      <Footer></Footer>
    </div>
  );
};

export default Home;
