import { RouterProvider } from "react-router-dom";
import "./App.css";
import publicRoutes from "./Router/PublicRoutes";

function App() {
  return (
    <div>
      <RouterProvider router={publicRoutes}></RouterProvider>
    </div>
  );
}

export default App;
