import React from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
    return (
        <>
        <div className="d-flex align-items-center justify-content-center min-vh-80 font-roboto ">
        <div className=" fw-bold font-roboto shadow-lg px-4 m-4 rounded-3">
          <div class="w-100 p-2 p-md-5">
            <Link class="text text-sm mb-2 d-inline-block" to="/">
              &lt; Back to dashboard
            </Link>
            <h1 className="text-2xl fw-bold mb-4">Change your password</h1>
            <p class="text-secondary mb-4">
                Enter your new password and confirm it to change your password.
            </p>

            <div className="my-4 mb-6">
              <form action="">
              <div className="mb-3">
                <label
                  className="form-label font-weight-bold "
                  htmlFor="password"
                >
                  Current Password
                  <span class="text-danger mx-1">*</span>
                </label>
                <input
                  className="form-control mb-3"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label font-weight-bold "
                  htmlFor="password"
                >
                  New Password
                  <span class="text-danger mx-1">*</span>
                </label>
                <input
                  className="form-control mb-3"
                  id="newPassword"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  className="form-label font-weight-bold "
                  htmlFor="password"
                >
                    Confirm New Password
                  <span class="text-danger mx-1">*</span>
                </label>
                <input
                  className="form-control mb-3"
                  id="confirmPassword"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

                <div class="d-flex align-items-center justify-content-between ">
                  <Link class="text-primary" to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>
                <div className="d-flex justify-content-center mt-2 w-100">
                  {/* <Link class="text-primary w-25" to="/login">
                    Back to Sign In
                  </Link> */}
                  <button
                    className="btn btn-primary fw-bold w-100"
                    type="submit"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
              <div className="">
                <p class="text-secondary mt-2">
                  <Link class="text-primary mx-1" to="/">
                    Cancel
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
        </>
    )
}

export default ChangePassword;