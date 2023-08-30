import React from "react";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import Footer from "../../Components/Footer";
import NewConcept from "../../Components/NewConcept/NewConcept";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import AvailableTuition from "../../Components/AvailabeTuiton/AvailableTuition";
const Home = () => {
  return (
    <div className=" heroBg">
      <ComplexNavbar></ComplexNavbar>
      <Hero></Hero>
      <AvailableTuition></AvailableTuition>
      <NewConcept></NewConcept>
      <WhyChooseUs></WhyChooseUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
