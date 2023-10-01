import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/404/404.jsx";
import Login from "./components/Landing/Login.jsx";
import Signup from "./components/Landing/Signup.jsx";

//method 1:  to pass routes to the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    //aru value haru ni pass garnu parxe xa tesko lagi children use gardexam array ma.
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "signup",
        element: <Signup />,
      },
      // if wrong path is entered then it will show 404 page
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ReactRouter le hamro app ko route manage garcha. yesla yuta props pass garcha router naam ko jun ki yuta object ho react-router-dom ko. */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
