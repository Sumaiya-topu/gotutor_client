import React from "react";
import PostCard from "../../Components/PostCard";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import Footer from "../../Components/Footer";

const TuitionPosts = () => {
  return (
    <div className="bg-[#d9d9d9]">
      <ComplexNavbar></ComplexNavbar>
      <div className=" w-5/6 xl:w-2/3 mx-auto">
        <PostCard></PostCard>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TuitionPosts;
