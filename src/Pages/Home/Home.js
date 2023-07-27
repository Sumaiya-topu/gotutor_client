import React from "react";

import { Button } from "@material-tailwind/react";
import AuthUser from "../../Hooks/AuthUser";
import ComplexNavbar from "./Navbar/ComplexNavbar";

const Home = () => {
  const { logout, userInfo } = AuthUser();
  console.log(userInfo);
  return (
    <div>
      <Button onClick={logout}></Button>
      <ComplexNavbar></ComplexNavbar>
    </div>
  );
};

export default Home;
