import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import GetTeacherInformation from "../Pages/GetTeacherInformation/GetTeacherInformation";
// import UpdateInfoForm from "../Components/TeacherInfoBanner/UpdateInfoForm";
import TeachersInfoForm from "../Components/TeacherInfoBanner/TeachersInfoForm";
import MyProfile from "../Authentication/SignUp/MyProfile/MyProfile";
import Blog from "../Pages/Blog/Blog";
import TuitionPosts from "../Pages/TuitionPosts/TuitionPosts";

import PostYourTuition from "../Pages/PostYourTuition/PostYourTuition";
import TuitionPostDetails from "../Components/TuitionPostDetails";
import TutorSearchResult from "../Components/TutorSearchResult/TutorSearchResult";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/create-account",
    element: <SignUp></SignUp>,
  },
  {
    path: "/provide-teacher-info",
    element: <GetTeacherInformation></GetTeacherInformation>,
  },
  {
    path: "/update-your-info",
    element: <TeachersInfoForm></TeachersInfoForm>,
  },
  {
    path: "/my-profile",
    element: <MyProfile></MyProfile>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/tuition-posts",
    element: <TuitionPosts></TuitionPosts>,
  },
  {
    path: "/post-a-tuition",
    element: <PostYourTuition></PostYourTuition>,
  },
  {
    path: "/tuition-post/:id",
    element: <TuitionPostDetails></TuitionPostDetails>,
  },
  {
    path: "/search-profile/:id",
    element: <TutorSearchResult></TutorSearchResult>,
  },
]);

export default publicRoutes;
