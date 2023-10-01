import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored signup data from local storage
    const storedSignupData = JSON.parse(localStorage.getItem('login'));

    if (storedSignupData) {
      const { email: storedEmail, password: storedPassword } = storedSignupData;

      // Check if the entered email and password match the stored signup data
      if (email === storedEmail && password === storedPassword) {
        // Redirect to home if credentials match
        navigate('/');
        // Store the logged-in email and password in local storage
      localStorage.setItem('loggedInUser', JSON.stringify({ email, password }));
      
      } else {
        // Credentials do not match, handle accordingly (e.g., show an error message)
        alert('Invalid email or password.');
      }
    } else {
      // No signup data found, handle accordingly (e.g., show an error message)
      alert('No signup data found.');
      navigate('/signup');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/3 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none"
          >
            Log in
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
          <Link to="/forgotpassword" className="text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
