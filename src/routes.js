import Login from "./components/Login";

import { Navigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import ProductDetails from "./components/ProductDetails";

const routes = (loggedIn) => [
  {
    path: "/",
    element: loggedIn ? <Home /> : <Navigate to="/signin" />,
  },
  {
    path: "/product/:id",
    element: loggedIn ? <ProductDetails /> : <Navigate to="/signin" />,
  },
  {
    path: "/signin",
    element: loggedIn ? <Login /> : <Navigate to="/" />,
  },
  {
    path: "/signup",
    element: loggedIn ? <Signup /> : <Navigate to="/" />,
  },
];

export default routes;
