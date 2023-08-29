import { Typography } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  return (
    <div className=" mt-60">
      <footer className="w-full bg-[#3a3f60] p-8">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12   text-center md:justify-between">
          <h1 className="text-white text-2xl">
            Go<span className="text-[#7839ff] font-bold">Tutor</span>
          </h1>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors text-white focus:text-white"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors text-white focus:text-white"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors text-white focus:text-white"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                className="font-normal transition-colors text-white focus:text-white"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography className="text-white text-center font-normal">
          &copy; 2023 Copyright
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
