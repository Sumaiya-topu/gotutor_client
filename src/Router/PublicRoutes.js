import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import GetTeacherInformation from "../Pages/GetTeacherInformation/GetTeacherInformation";
import UpdateInfoForm from "../Components/TeacherInfoBanner/UpdateInfoForm";

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
    element: <UpdateInfoForm></UpdateInfoForm>,
  },
]);

export default publicRoutes;
