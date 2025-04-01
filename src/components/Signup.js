import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {


  const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/main');
        localStorage.setItem("isLoggedIn", "true");
    };



  return (
    <>
      <div className="flex items-center justify-center min-h-screen font-roboto mt-4">
        <div className="flex items-center justify-center fw-bold font-roboto ">
          <div className="d-flex justify-content-center rounded-lg shadow-md">
            <img
              alt="Connect Locally, Live Globally"
              className="mx-auto mb-1 rounded-3"
              height="150"
              src="logo.jpg"
              width="150"
            />
          </div>
          <h1 className="text-2xl font-bold fw-bold text-center mb-6">SignUp</h1>
          <p className="text-gray-600 text-center mt-2">
            Create your account to get started
          </p>
          <div className="container-sm flex items-center items-center my-2">
            <div
              className="container-sm d-flex justify-content-center "
              style={{ width: "70%" }}
            >
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Enter your name"
                    pattern="[a-z, A-Z]{3,15}"
                    title="Please enter a  valid name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputNumber" className="form-label">
                    Addhar No.
                  </label>
                  <input
                    type="addhar"
                    className="form-control"
                    id="inputNumber"
                    placeholder="Enter your addhar no."
                    pattern="[0-9]{12}"
                    title="Please enter a 12-digit addhar number"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Enter your phone no."
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a 10-digit phone number"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="Enter your city"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select" required>
                    <option value="">Choose your state</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Postal Code
                  </label>
                  <input
                    type="zip"
                    className="form-control"
                    id="inputZip"
                    placeholder="Enter your postal code"
                    pattern="[0-9]{6}"
                    title="Please enter a 6-digit postal code"
                    required
                  />
                </div>
                <div className="d-flex justify-content-center ">
                  <button
                    className=" bg-red-500 hover:bg-red-700 text-black font-bold fw-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    href="/login"
                  >
                    Signup
                  </button>
                  {/* <Link className="btn btn-primary mx-1" to="#" >Search</Link> */}
                </div>
              </form>
            </div>
            <div className=" d-flex justify-content-center mt-2 ">
              <p className="text-center text-gray-500 text-xs mt-6">
                {" "}
                Already have an account?
              </p>
              <Link
                className="font-bold text-sm text-red-500 hover:text-red-800 mx-2"
                to="/login"
                role="button"
              >
                Login
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-2">
            &copy;2025 Connect Locally, Live Globall All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;