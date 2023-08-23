import { Spinner } from "@material-tailwind/react";
import React from "react";

const Loader = () => {
  return (
    <div className="h-screen w-[80vw] flex justify-center items-center">
      <Spinner />
    </div>
  );
};

export default Loader;
