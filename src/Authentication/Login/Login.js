import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  return (
    <div className="flex bg-[#e4f6fa]">
      {/* login page image */}
      <div className="w-[100%] md:block hidden relative overflow-hidden">
        <img
          className="w-[20%] lg:top-[-70px] md:top-[-40px] right-12 absolute"
          // src={patternTop}
          alt="Top pattern"
        />
        <div className=" md:flex items-center hidden">
          <img
            className="w-[75%] lg:w-[65%] mx-auto md:pt-44 lg:pt-32"
            //   src={loginImg}
            alt="login page img"
          />
        </div>
        <img
          className="w-[20%] lg:bottom-[-70px] md:bottom-[-40px] left-12 absolute"
          // src={patternBottom}
          alt="Top pattern"
        />
      </div>
      {/* login form */}
      <div className="w-[100%] bg-gradient-to-tr from-[#747ffcef] via-[#4ab2e2e2] to-[#3ae2dfc9] md:rounded-l-3xl">
        <div className="w-[75%] lg:w-[65%] mx-auto my-24">
          <h2 className="text-2xl font-medium text-white">
            Hello! Welcome back
          </h2>
          {/*form start */}
          <form className="py-10">
            {/* input email */}
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
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
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                  Password
                </span>
                <Link
                  to="/resetPassword"
                  className="ml-auto text-sm underline cursor-pointer text-white"
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
              <div className="h-[1px] w-[100%] bg-white"></div>
              <span className="text-white mx-4">OR</span>
              <div className="h-[1px] w-[100%] bg-white"></div>
            </div>

            <small className="text-white">
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
            <img className="w-8" alt="google png" /> Sign in with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
