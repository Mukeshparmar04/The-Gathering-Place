import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registation = () => {
  const navigate = useNavigate();
  const [hasGuest, setHasGuest] = useState("yes"); // Default to "yes"

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add validation logic here before navigation
    navigate("/");
    alert("Registration successful!");
  };

  const handleGuestChange = (event) => {
    setHasGuest(event.target.value);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 py-5">
      <div className="shadow-lg rounded fw-bold p-4 w-lg-50">
        <a className="text text-sm mb-2 d-inline-block" href="/">
          &lt; Back to dashboard
        </a>
        <h1 className="h2 fw-bold text-center mb-2">Event Registration Form</h1>
        <p className="text-center text-muted mb-3">
          Last Registration Day - May 21, 2025
        </p>

        <h2 className="h5 fw-bold mb-3">Attendee Information</h2>
        <p className="text-muted mb-3">
          Please fill name and contact information of attendees.
        </p>

        <form onSubmit={handleSubmit}>
          {/* ... (Your Name, Email, Contact Number fields remain the same) ... */}
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <div className="d-flex gap-2">
              <select className="form-select w-25" required>
                <option value="">Select Title</option>
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
              <input
                type="text"
                placeholder="First Name"
                className="form-control w-50"
                required
                pattern="[A-Za-z]+"
                title="Only letters are allowed"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-control w-50"
                required
                pattern="[A-Za-z]+"
                title="Only letters are allowed"
              />
            </div>
          </div>
          <div className="">
            <div className="d-flex gap-2">
              <div className="w-50">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="form-control"
                  required
                />
              </div>

              <div className="w-50">
                <label className="form-label">Contact Number</label>
                <input
                  type="tel"
                  placeholder="1234567890"
                  className="form-control"
                  required
                  pattern="[0-9]{10}"
                  title="Format: 1234567890"
                />
                <p className="form-text text-muted">
                  Please enter a valid phone number.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-3 guest-info-hidden">
            <label className="form-label">
              Will you have a guest with you?
            </label>
            <div className="d-flex align-items-center gap-4">
              <div className="form-check">
                <input
                  type="radio"
                  name="hasGuest"
                  value="yes"
                  className="form-check-input"
                  checked={hasGuest === "yes"}
                  onChange={handleGuestChange}
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="hasGuest"
                  value="no"
                  className="form-check-input"
                  checked={hasGuest === "no"}
                  onChange={handleGuestChange}
                />
                <label className="form-check-label">No</label>
              </div>
            </div>
          </div>

          {hasGuest === "yes" && (
            <div className="guest-info">
              {/* ... (Guest Name, Guest Email, Guest Contact Number fields) ... */}
              <div className="mb-3">
                <label className="form-label">Guest Name</label>
                <div className="d-flex gap-2">
                  <select className="form-select w-25" required>
                    <option value="">Select Title</option>
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                  </select>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control w-50"
                    required
                    pattern="[A-Za-z]+"
                    title="Only letters are allowed"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control w-50"
                    required
                    pattern="[A-Za-z]+"
                    title="Only letters are allowed"
                  />
                </div>
              </div>
              <div className="">
                <div className="d-flex gap-2">
                  <div className="w-50">
                    <label className="form-label">Guest Email Address</label>
                    <input
                      type="email"
                      placeholder="example@example.com"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="w-50">
                    <label className="form-label">Guest Contact Number</label>
                    <input
                      type="tel"
                      placeholder="1234567890"
                      className="form-control"
                      required
                      pattern="[0-9]{10}"
                      title="Format: 000 000-0000"
                    />
                    <p className="form-text text-muted">
                      Please enter a valid phone number.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ... (Event Updates, Submit Button, Copyright) ... */}
          <div className="mb-3">
            <label className="form-label">
              Would you like to receive event updates via email?
            </label>
            <div className="d-flex align-items-center gap-4">
              <div className="form-check">
                <input
                  type="radio"
                  name="eventUpdates"
                  value="yes"
                  className="form-check-input"
                  defaultChecked
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="eventUpdates"
                  value="no"
                  className="form-check-input"
                />
                <label className="form-check-label">No</label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <button
              className="btn-primary bg-red-500 hover:bg-red-700 text-black fw-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-100"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="text-center text-muted text-xs mt-4">
          &copy; 2025 Connect Locally, Live Globally. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Registation;