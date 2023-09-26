import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    sex: '',
    age: '',
    address: '',
    profile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleProfileChange = (e) => {
    setFormValues({
      ...formValues,
      profile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    console.log('Form data:', formData);
    // Add your form submission logic here

    // Redirect to home after successful submission
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Signup Intro */}
        <div className="md:w-1/2 p-10">
          <h1 className="text-white text-3xl mb-4">Hey Buddy!</h1>
          <p className="text-white mb-10">Do a quick Sign Up and Grab some Books!</p>
          <img src="../Assets/images/booklogo.png" alt="Book" className="h-48" />
        </div>

        {/* Signup Form */}
        <div className="md:w-1/2 p-10">
          <div className="mb-4">
            Already a user? <Link to="/" className="text-blue-500 hover:underline"><b>SignIn</b></Link>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            {/* ... (other form items) */}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profile">
                Upload
              </label>
              <input type="file" name="profile" id="profile" onChange={handleProfileChange} />
            </div>

            {/* Submit button */}
            <div className="mb-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
