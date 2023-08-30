import React from "react";
import patternTop from "../../assets/authentication/bg-pattern-02.png";
import patternBottom from "../../assets/authentication/bg-pattern-01.png";
import signUpImg from "../../assets/authentication/Sign-up-image.jpg";
import googleImg from "../../assets/authentication/search.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthUser from "../../Hooks/AuthUser";
import CreateUserHook from "../../Hooks/FetchFunction/CreateUserHook";

const SignUp = () => {
  const { getToken } = AuthUser();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const referredBy = query.get("referredBy");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    CreateUserHook(data, navigate);
    console.log("User data", data);
  };

  if (getToken()) {
    return navigate("/");
  }
  return (
    <div className="flex bg-transparent">
      {/* SignUp page image */}
      <div className="w-[100%] lg:block hidden relative overflow-hidden">
        <img
          className="w-[20%] lg:top-[-70px] md:top-[-40px] right-12 absolute"
          src={patternTop}
          alt="Top pattern"
        />
        <div className=" md:flex items-center hidden">
          <img
            className="w-[75%] lg:w-[65%] mx-auto md:pt-80 lg:pt-52"
            src={signUpImg}
            alt="login page img"
          />
        </div>
        <img
          className="w-[20%] lg:bottom-[-70px] md:bottom-[-40px] left-12 absolute"
          src={patternBottom}
          alt="Top pattern"
        />
      </div>
      {/* SignUp form */}
      <div className="w-[100%] bg-[#7839ff] md:rounded-l-3xl">
        <div className="w-[75%] lg:w-[65%] mx-auto my-24">
          <h2 className="text-2xl font-medium text-white">
            Create your account
          </h2>
          {/*form start */}
          <form onSubmit={handleSubmit(handleSignUp)} className="pt-10 pb-0">
            {/* input fullName */}
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                Full Name
              </span>
              <input
                {...register("fullName", { required: true })}
                type="text"
                className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-white bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm"
                placeholder="Enter your name"
              />
              {errors.fullName && (
                <span className="text-red">This field is required</span>
              )}
            </label>
            {/* input Email address */}
            <label className="block mt-5">
              <div>
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                  Email address
                </span>
              </div>
              <input
                {...register("email", { required: true })}
                type="email"
                className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-white bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-red">This field is required</span>
              )}
            </label>
            {/* input password */}
            <label className="block mt-5">
              <div>
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                  Password
                </span>
              </div>
              <input
                {...register("password", { required: true })}
                type="password"
                className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-white bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-red">This field is required</span>
              )}
            </label>
            {/* input password */}
            <label className="block mt-5">
              <div>
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-white">
                  Confirm Password
                </span>
              </div>
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                className="mt-2 px-3 py-3 border-2 shadow-sm focus:outline-none border-white bg-transparent placeholder-slate-300  block w-full rounded-md sm:text-sm"
                placeholder="Type your password"
              />
              {errors.password && (
                <span className="text-red">This field is required</span>
              )}
            </label>

            {/* sign up as  */}

            <div className="mt-3">
              <label className="block mb-2 text-sm font-medium text-white">
                Sign Up as
              </label>
              <select
                {...register("role", { required: true })}
                name="role"
                className="mt-2 p-3 border shadow-sm   block w-full bg-white text-black sm:text-sm"
              >
                <option selected disabled>
                  Choose One
                </option>
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
              </select>

              {errors.role && (
                <span className="text-red">This field is required</span>
              )}
            </div>

            <input
              className="py-3 w-full bg-gradient-to-r from-[#e85858ef] via-[#fb7171] to-[#ff9085] mt-10 border-2 border-white rounded-md text-white font-medium cursor-pointer"
              type="submit"
              value="SignUp"
            />

            <div className="flex items-center py-6">
              <div className="h-[1px] w-[100%] bg-transparent"></div>
              <span className="text-white mx-4">OR</span>
              <div className="h-[1px] w-[100%] bg-transparent"></div>
            </div>
          </form>
          <div>
            <button
              //   onClick={() => signInWithGoogle()}
              className="py-2 w-full bg-white border-2 border-[#46e9e7c9] rounded-md  font-medium cursor-pointer flex items-center justify-center gap-3 mb-5"
            >
              <img className="w-8" src={googleImg} alt="google png" /> Sign in
              with google
            </button>
            <small className="text-white">
              I have an account?{" "}
              <Link to="/login" className="font-medium hover:underline">
                Login
              </Link>
            </small>
          </div>
          {/*form end */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
