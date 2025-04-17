import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ showSidebar }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  // State to manage edit mode for different sections
  const [editProfileMode, setEditProfileMode] = useState(false);
  const [editPersonalInfoMode, setEditPersonalInfoMode] = useState(false);
  const [editAddressMode, setEditAddressMode] = useState(false);

  // State to hold user data (replace with your actual data fetching)
  const [profileData, setProfileData] = useState({
    firstName: "Mukesh",
    lastName: "Parmar",
    email: "carrytom@gmail.com",
    phone: "+91 881 524 2848",
    bio: "Team Manager",
    country: "India",
    cityState: "Indore, Madhya Pradesh",
    houseStreet: "02, Lig",
    postalCode: "452011",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false");
  }, [isLoggedIn]);

  useEffect(() => {
    let yOffset1 = 0;
    let yOffset2 = 0;
    let yOffset3 = 110;
    let yOffset4 = -170;
    let yOffset5 = 370;
    let yOffset6 = 0;

    const intervalId = setInterval(() => {
      yOffset1 += 1;
      yOffset2 += 1;
      yOffset3 += 1;
      yOffset4 += 1;
      yOffset5 += 1;
      yOffset6 += 1;

      document.body.style.setProperty("--y-offset-1", `${yOffset1}px`);
      document.body.style.setProperty("--y-offset-2", `${yOffset2}px`);
      document.body.style.setProperty("--y-offset-3", `${yOffset3}px`);
      document.body.style.setProperty("--y-offset-4", `${yOffset4}px`);
      document.body.style.setProperty("--y-offset-5", `${yOffset5}px`);
      document.body.style.setProperty("--y-offset-6", `${yOffset6}px`);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  // Function to handle input changes during edit mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <main className="background-animation">
      <div className="d-flex flex-column flex-lg-row">
        {showSidebar && (
          <div className="shadow-lg sidebar px-4">
            {/* Sidebar content (same as before) */}
            <div className="p-4 d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center rounded-lg shadow-md">
                <img
                  alt="Connect Locally, Live Globally"
                  className="mx-auto mb-2 rounded-circle"
                  height="150"
                  src="logo.svg"
                  width="150"
                />
              </div>
            </div>
            <div className="mt-2 fw-bold text-center text-lg-start">
              <Link
                className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                to="/"
              >
                <i className="fa-solid fa-house"></i>
                <span className="mx-2">Dashboard</span>
              </Link>
              <Link
                className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                to="/upcoming-events"
              >
                <i className="fa-solid fa-calendar-days"></i>
                <span className="mx-2">Upcoming Events</span>
              </Link>
              <div className="mt-4">
                <h6 className="text-muted fw-bold text-uppercase px-2">Others</h6>
                {isLoggedIn && (
                  <Link
                    id="userProfile"
                    className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                    to="/userprofile"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="mx-2">User Profile</span>
                  </Link>
                )}

                {isLoggedIn && (
                  <Link
                    id="userProfile"
                    className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                    to="/members"
                  >
                    <i class="fa-solid fa-users"></i>
                    <span className="mx-2">Members</span>
                  </Link>
                )}
                <Link
                  id="donation"
                  className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                  to="/donation"
                >
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                  <span className="mx-2">Donation</span>
                </Link>
                <Link
                  className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark"
                  to="#"
                >
                  <i className="fas fa-lock"></i>
                  <span className="mx-2">Authentication</span>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="main-content p-4 w-100">
          <div className="container shadow-lg p-4 rounded-5">
            <div className="row">
              <div className="col-12">
                <div className="bg-gray-100">
                  <div className="container">
                    <h2 className="fw-bold">Profile</h2>
                  </div>

                  {/* Profile Section */}
                  <div className="container rounded-lg shadow-lg p-4 mb-4 rounded-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <img
                          alt="Mukesh's Profile"
                          className="w-20 h-20 rounded-circle"
                          height="80"
                          src="pp.jpg"
                          width="80"
                        />
                        <div className="ms-3 fw-bold">
                          {editProfileMode ? (
                            <>
                              <input
                                type="text"
                                name="firstName"
                                value={profileData.firstName}
                                onChange={handleInputChange}
                                className="form-control"
                              />
                              <input
                                type="text"
                                name="lastName"
                                value={profileData.lastName}
                                onChange={handleInputChange}
                                className="form-control"
                              />
                              <p className="text-gray-600">
                                Team Manager | Indore, India
                              </p>
                            </>
                          ) : (
                            <>
                              <h3 className="text-xl fw-bold">
                                {profileData.firstName} {profileData.lastName}
                              </h3>
                              <p className="text-gray-600">
                                Team Manager | Indore, India
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="d-flex align-items-center m-2 fs-5">
                        <Link
                          className="text-gray-800 me-2 px-2 border rounded-circle"
                          href="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          className="text-gray-800 me-2 px-2 border rounded-circle"
                          href="#"
                        >
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link
                          className="text-gray-800 me-2 px-2 border rounded-circle"
                          to="https://linkedin.com/in/mukesh-parmar-986517258/"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link
                          className="text-gray-800 me-2 px-2 border rounded-circle"
                          to="https://www.instagram.com/mukesh_p04/"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                        {/* Edit Profile Button */}
                        <button
                          className="d-flex align-items-left btn btn-outline-dark fw-bold btn ms-3 px-3 rounded-pill"
                          onClick={() => setEditProfileMode(!editProfileMode)}
                        >
                          <i className="fa-solid fa-pen pt-1 me-1"></i>
                          {editProfileMode ? "Save" : "Edit"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information Section */}
                  <div className="container fw-bold rounded-lg shadow-lg p-4 mb-4 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="text-lg fw-bold">Personal Information</h3>
                      {/* Edit Personal Info Button */}
                      <button
                        className="d-flex align-items-left btn btn-outline-dark fw-bold mx-2 px-3 rounded-pill"
                        onClick={() =>
                          setEditPersonalInfoMode(!editPersonalInfoMode)
                        }
                      >
                        <i className="fa-solid fa-pen pt-1 me-1"></i>
                        {editPersonalInfoMode ? "Save" : "Edit"}
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">First Name</p>
                        {editPersonalInfoMode ? (
                          <input
                            type="text"
                            name="firstName"
                            value={profileData.firstName}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">
                            {profileData.firstName}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Last Name</p>
                        {editPersonalInfoMode ? (
                          <input
                            type="text"
                            name="lastName"
                            value={profileData.lastName}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">
                            {profileData.lastName}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Email address</p>
                        {editPersonalInfoMode ? (
                          <input
                            type="email"
                            name="email"
                            value={profileData.email}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">{profileData.email}</p>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Phone</p>
                        {editPersonalInfoMode ? (
                          <input
                            type="tel"
                            name="phone"
                            value={profileData.phone}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">{profileData.phone}</p>
                        )}
                      </div>
                      <div className="col-12">
                        <p className="text-gray-600">Bio</p>
                        {editPersonalInfoMode ? (
                          <textarea
                            name="bio"
                            value={profileData.bio}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">{profileData.bio}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="container rounded-lg shadow-lg p-4 mb-4 rounded-3 fw-bold">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="text-lg fw-bold">Address</h3>
                      {/* Edit Address Button */}
                      <button
                        className="d-flex align-items-left btn btn-outline-dark fw-bold mx-2 px-3 rounded-pill"
                        onClick={() => setEditAddressMode(!editAddressMode)}
                      >
                        <i className="fa-solid fa-pen pt-1 me-1"></i>
                        {editAddressMode ? "Save" : "Edit"}
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Country</p>
                        {editAddressMode ? (
                          <input
                            type="text"
                            name="country"
                            value={profileData.country}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">{profileData.country}</p>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">City/State</p>
                        {editAddressMode ? (
                          <input
                            type="text"
                            name="cityState"
                            value={profileData.cityState}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">
                            {profileData.cityState}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">House/Street</p>
                        {editAddressMode ? (
                          <input
                            type="text"
                            name="houseStreet"
                            value={profileData.houseStreet}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">
                            {profileData.houseStreet}
                          </p>
                        )}
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Postal Code</p>
                        {editAddressMode ? (
                          <input
                            type="text"
                            name="postalCode"
                            value={profileData.postalCode}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        ) : (
                          <p className="font-weight-bold">
                            {profileData.postalCode}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;