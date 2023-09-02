import React from "react";
import TuitionPostForm from "../TuitionPosts/TuitionPostForm";
import ComplexNavbar from "../../Components/Navbar/ComplexNavbar";
import Footer from "../../Components/Footer";

const PostYourTuition = () => {
  return (
    <div>
      <ComplexNavbar></ComplexNavbar>
      <TuitionPostForm></TuitionPostForm>
      <Footer></Footer>
    </div>
  );
};

export default PostYourTuition;
