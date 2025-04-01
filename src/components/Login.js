import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const registeredNumbers = [ "8815242848", "9876543210", "8765432109", "7654321098"]; // Database

const Login = () => {
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registeredNumbers.includes(mobile)) {
      alert('Login Successful!');
      localStorage.setItem("isLoggedIn", "true");
      navigate('/main'); 
    } else {
      alert('User not found! Please Sign Up!');
      navigate('/signup');
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen font-roboto mt-4">
        <div className="flex items-center justify-center fw-bold font-roboto ">
          <div className="d-flex justify-content-center rounded-lg shadow-md">
            <img
              alt="Connect Locally, Live Globally"
              className="mx-auto mb-4 rounded-3"
              height="150"
              src="logo.jpg"
              width="150"
            />
          </div>
          <h1 className="text-2xl font-bold fw-bold text-center mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="flex items-center items-center my-4 mb-6">
            <div className="mb-6 d-flex justify-content-center">
              <label className="block text-gray-700 text-sm font-bold mt-2 " htmlFor="Phone">
                Phone No.:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mx-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="Phone"
                type="tel"
                placeholder="Enter your Phone No"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                maxLength={10}
                pattern="[0-9]{10}"
              />
            </div>
            <div className="d-flex justify-content-center mt-2">
              <button
                className="bg-red-500 hover:bg-red-700 text-black font-bold fw-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs mt-6">
            &copy;2025 Connect Locally, Live Globall All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;