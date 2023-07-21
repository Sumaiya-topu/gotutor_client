import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";

const publicRoutes = createBrowserRouter([
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default publicRoutes;
