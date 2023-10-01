import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Login = () => {
  const handleSignup = () => {
    // Handle signup logic
  };

  const handleForgot = () => {
    // Handle forgot password logic
  };

  const handleLogin = () => {
   //check from local storage registered user then login and send to / page else send to signup page. check username password from local storage match or not.
    // Handle login logic
    const loginData = localStorage.getItem('login');
    if (loginData) {
      console.log('loginData', JSON.parse(loginData));
      window.location.href = '/';
    } else {
      window.location.href = '/signup';
    }


  };

  return (
    <div className="flex">
      {/* Login intro */}
      <div className="w-1/2 bg-blue-600 p-16 text-white">
        <div className="flex items-center mb-10">
          <img src={logo} alt="Logo" className="h-12" />
          <b className="ml-4 text-xl">ITP Store</b>
        </div>
        <h2 className="text-2xl font-bold mb-4">Get exclusive access to Best sellers</h2>
        <p>
          We are in the process of developing our online platform, where we aim to make the concept as user-friendly as
          possible. We send out access continuously, focusing on good customer contact.
        </p>
      </div>

      {/* Login form */}
      <div className="w-1/2 p-16">
        <div className="mb-4">
          Don't have an account? <Link to="/signup" className="text-blue-500" onClick={handleSignup}>
            Create profile
          </Link>
        </div>

        <div className="bg-white p-8 rounded shadow-lg">
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1">
                Username
              </label>
              <input
                type="text"
                id="email"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgotpassword" className="text-blue-500" onClick={handleForgot}>
                Forgot password
              </Link>
            </div>
            <button
              type="button"
              className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none"
              onClick={handleLogin}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
