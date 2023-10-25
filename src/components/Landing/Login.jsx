import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // locally stored data li retrive gareko
    const storedSignupData = JSON.parse(localStorage.getItem('login'));


    if (storedSignupData) {
      const { email: storedEmail, password: storedPassword } = storedSignupData; // destructuring gareko ho. 

      // Check if the entered email and password match the stored signup data
      if (email === storedEmail && password === storedPassword) {
        
        // Store the logged-in email and password in local storage
      localStorage.setItem('loggedInUser', JSON.stringify({ email, password }));

      // login data li store garara home page ma redirect gareko
      navigate('/');


      } else {
        
        alert('Invalid email or password.');
      }
    } else {
      // No signup data found, handle accordingly (e.g., show an error message)
      alert('No signup data found.');
      navigate('/signup');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")' }}>
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
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
          <label htmlFor="password" className="block mb-1 text-gray-700">Password</label>
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
          className="w-full mt-4 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={handleLogin}
        >
          Log in
        </button>
      </form>
      <div className="mt-4 flex justify-between">
        <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
        <Link to="/forgotpassword" className="text-blue-500 hover:underline">Forgot password?</Link>
      </div>
    </div>
  </div>
  );
};

export default Login;
