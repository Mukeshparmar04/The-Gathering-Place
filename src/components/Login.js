import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/userprofile");
    localStorage.setItem("isLoggedIn", "true");
  };

  return (
      <div className="d-flex align-items-center justify-content-center min-vh-100 font-roboto ">
        <div className=" fw-bold font-roboto shadow-lg  m-4 w-75 rounded-3">
          <div class="w-100 p-4 p-md-5">
            <Link class="text text-sm mb-2 d-inline-block" to="/">
              &lt; Back to dashboard
            </Link>
            <h1 className="text-2xl fw-bold mb-4">Sign In</h1>
            <p class="text-secondary mb-4">
              Enter your email and password to sign in!
            </p>

            <div class="d-flex mb-2 ">
              <button class="btn btn-outline-secondary d-flex align-items-center justify-content-center w-50 mr-2 me-2">
                <i class="fa-brands fa-google mx-2"></i>
                Sign in with Google
              </button>
              <button class="btn btn-outline-secondary d-flex align-items-center justify-content-center w-50 ms-2">
                <i class="fa-brands fa-x-twitter mx-2"></i>
                Sign in with X
              </button>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <hr class="w-100 border-secondary" />
              <span class="px-3 text-secondary">Or</span>
              <hr class="w-100 border-secondary" />
            </div>
            <div className="my-4 mb-6">
              <form form onSubmit={handleSubmit} action="">
              <div className="mb-3">
                <label className="form-label font-weight-bold " htmlFor="email">
                  Email
                  <span class="text-danger mx-1">*</span>
                </label>
                <input
                  className="form-control "
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label font-weight-bold "
                  htmlFor="password"
                >
                  Password
                  <span class="text-danger mx-1">*</span>
                </label>
                <input
                  className="form-control mb-3"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <div class="d-flex align-items-center justify-content-between ">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" />
                  <label class="form-check-label text-secondary">
                    Keep me logged in
                  </label>
                </div>
                <Link class="text-primary" to="/forgot-password">
                  Forgot password?
                </Link>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <button
                  className="btn btn-primary fw-bold w-100"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
              </form>
              <div className="d-flex align-items-center justify-content-between  ">
                <p class="text-secondary mt-2">
                  Don't have an account?
                  <Link class="text-primary mx-1" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
            <p className="text-center text-muted text-sm mt-4">
              &copy;2025 Connect Locally, Live Globally All rights reserved.
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
  );
};

export default Login;



