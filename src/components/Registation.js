import React from "react";
import { Link } from "react-router-dom";

const Registation = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center p-4 rounded shadow">
            <img
              src="logo.jpg"
              alt="Connect Locally, Live Globally"
              className="img-fluid rounded-3 mb-4"
              style={{ maxWidth: "150px" }}
            />
            <h1 className="mb-3">Connect Locally, Live Globally</h1>
            <p className="text-muted mb-4">
              Community built on shared interests and support
            </p>
            <p className="mb-4">New user?</p>
            <Link to="/login" className="btn btn-primary mb-3">
              Login
            </Link>
            <p className="text-center text-muted text-xs mt-2">
              &copy; 2025 Connect Locally, Live Globally. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;