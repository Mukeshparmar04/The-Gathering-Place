import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/userprofile");
    localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center min-vh-100 font-roboto">
        <div className="fw-bold font-roboto w-75 shadow-lg m-4 rounded-3">
          <div class="w-100 p-4 p-md-5">
            <a class="text text-sm mb-2 d-inline-block" href="/">
              &lt; Back to dashboard
            </a>
            <h1 className="text-2xl fw-bold mb-6">SignUp</h1>
            <p className="text-gray-600  mt-2">
              Create your account to get started
            </p>
            <div class="d-flex mb-2 ">
              <button class="btn btn-outline-secondary d-flex align-items-center justify-content-center w-50 mr-2 me-2">
                <i class="fa-brands fa-google mx-2"></i>
                Sign up with Google
              </button>
              <button class="btn btn-outline-secondary d-flex align-items-center justify-content-center w-50 ms-2">
                <i class="fa-brands fa-x-twitter mx-2"></i>
                Sign up with X
              </button>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <hr class="w-100 border-secondary" />
              <span class="px-3 text-secondary">Or</span>
              <hr class="w-100 border-secondary" />
            </div>
            <div className="my-2">
              <div className="container-sm d-flex justify-content-center ">
                <form onSubmit={handleSubmit} className="row g-3 ">
                  <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">
                      First Name
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
                    <label htmlFor="inputName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      placeholder="Enter your last name"
                      pattern="[a-z, A-Z]{3,15}"
                      title="Please enter a  valid last name"
                      required
                    />
                  </div>
                  {/* <div className="col-md-6">
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
                  </div> */}
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
                      className=" btn-primary bg-red-500 hover:bg-red-700 text-black  fw-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline w-100"
                      type="submit"
                    >
                      Signup
                    </button>
                  </div>
                </form>
              </div>
              <div className=" d-flex  mt-2 ">
                <p className=" text-gray-500 text-xs mt-6">
                  {" "}
                  Already have an account?
                </p>
                <Link
                  className="font-bold text-sm text-red-500 hover:text-red-800 mx-2"
                  to="/login"
                  role="button"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              &copy;2025 Connect Locally, Live Globall All rights reserved.
            </p>
          </div>
        </div>

        <div class="d-none d-md-flex w-50 text-white align-items-center justify-content-center rounded-3 shadow-lg me-4">
          <div
            style={{
              backgroundImage: 'url("back2.jpeg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
            }}
            className="d-flex align-items-center justify-content-center shadow-lg"
          >
            <div class="text-center">
              <img
                alt="The Gathering Place logo"
                class="mx-auto mb-4"
                height="200"
                src="logo.svg"
                width="200"
              />
              <h1 class="h3 fw-bold text-dark mb-2">The Gathering Place</h1>
              <p class="text-dark">Connect Locally, Live Globally</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
