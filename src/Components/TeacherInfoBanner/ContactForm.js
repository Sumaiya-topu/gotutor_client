import {
  Button,
  Card,
  Checkbox,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const ContactForm = () => {
  return (
    <div className=" absolute border left-1/4 -bottom-[800px] grid grid-cols-2 gap-5 w-1/2">
      {" "}
      <div className="mt-10">
        <h1 className="text-3xl font-sans">
          Please Tell Us More About Your Major And Experience.
        </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div>
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
              <Input size="lg" label="Name" />
              <Input size="lg" label="Email" />
              <Input type="password" size="lg" label="Password" />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
              >
                Sign In
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
