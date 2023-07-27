import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className=" h-screen flex items-center bg-[#e4f6fa]">
      {/* login page image */}

      {/* login form */}
      <div className="w-1/2 mx-auto bg-white md:rounded-3xl shadow-lg">
        <div className="w-[75%] lg:w-[65%] mx-auto py-[100px]">
          <h2 className="text-2xl font-medium">Hello! Welcome back</h2>
          {/*form start */}
          <form onSubmit={handleSubmit(handleLogin)} className="py-10">
            {/* input email */}
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium ">
                Email address
              </span>
              <input
                {...register("email", { required: true })}
                type="email"
                className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-white bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm"
                placeholder="you@example.com"
              />
            </label>
            {/* input password */}
            <label className="block mt-5">
              <div className="flex">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium">
                  Password
                </span>
                <Link
                  to="/resetPassword"
                  className="ml-auto text-sm underline cursor-pointer text-red-600"
                >
                  forgot password
                </Link>
              </div>
              <input
                {...register("password", { required: true })}
                type="password"
                className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-white bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm"
                placeholder="Type your password"
              />
            </label>
            <input
              className="py-3 w-full bg-gradient-to-r from-[#616efbef] to-[#57ece9c9] mt-10 border-2 border-white rounded-md text-white font-medium cursor-pointer"
              type="submit"
            />
            <div className="flex items-center py-6">
              <div className="h-[1px] w-[80%] bg-gray-900 "></div>
              <span className="tmx-4">OR</span>
              <div className="h-[1px] w-[80%] bg-gray-900 "></div>
            </div>

            <small className="">
              Don't have an account?{" "}
              <Link to="/signUp" className="font-medium hover:underline">
                SignUp
              </Link>
            </small>
          </form>
          {/*form end */}
          <button
            //   onClick={handleGoogleSignIn}
            className="py-2 w-full bg-white border-2 border-[#46e9e7c9] rounded-md  font-medium cursor-pointer flex items-center justify-center gap-3 mb-5"
          >
            <FcGoogle></FcGoogle> Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
