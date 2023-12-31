import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/404/404.jsx";
import Login from "./components/Landing/Login.jsx";
import Signup from "./components/Landing/Signup.jsx";


//Yuta router banako ho react-router-dom ko createBrowserRouter le. yo vitra hami routes haru define garxau. 
const router = createBrowserRouter([
  // yo object ma path, element, children haru xa. path le url ko path define garxa, element le tyo path ko component define garxa ani children le tyo path ko children define garxa.
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
