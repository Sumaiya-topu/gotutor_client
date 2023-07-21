import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Home from "../Pages/Home/Home";

const publicRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default publicRoutes;
