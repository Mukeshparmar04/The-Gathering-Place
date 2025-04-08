// import React from "react";
// import { Link } from "react-router-dom";

// const UserProfile = () => {
//   return (
//     <main className="">
//       <div className="d-flex flex-column flex-lg-row ">
//       {/* slidbar */}
//         <div className="shadow-lg sidebar px-4">
//           <div className="p-4 d-flex flex-column align-items-center"> 
//             <div className="d-flex justify-content-center rounded-lg shadow-md">
//               <img
//                 alt="Connect Locally, Live Globally"
//                 className="mx-auto mb-2 rounded-circle"
//                 height="150"
//                 src="logo.svg"
//                 width="150"
//               />
//             </div>
//           </div>
//           <div className="mt-2 fw-bold text-center text-lg-start"> 
//             <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="/">
//               <i className="fa-solid fa-house"></i>
//               <span className="mx-2">Dashboard</span>
//             </Link>
//             <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="/upcoming-events">
//               <i className="fa-solid fa-calendar-days"></i>
//               <span className="mx-2">Upcoming Events</span>
//             </Link>
//             <div className="mt-4">
//               <h6 className="text-muted fw-bold text-uppercase px-2">Others</h6>
//               <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="/userprofile">
//                 <i className="fa-solid fa-user"></i>
//                 <span className="mx-2">User Profile</span>
//               </Link>
//               <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="#">
//                 <i className="fas fa-lock"></i>
//                 <span className="mx-2">Authentication</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         <div className="main-content p-4 w-100">
//           <div className="container shadow-lg p-4 rounded-5">
//             <div className="row">
//               <div className="col-12">
                
//               <div className=" bg-gray-100  ">
//                 <div className=" container w-75">
//                   <h2 className="fw-bold">Profile</h2>
//                 </div>
//                 <div className="container rounded-lg shadow-lg p-4 mb-4 w-75 rounded-3">
//                   <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
//                     <div className="d-flex align-items-center mb-3 mb-md-0">
//                       <img
//                         alt="Tom's Profile"
//                         className="w-20 h-20 rounded-circle"
//                         height="80"
//                         src="user-profil1.jpg"
//                         width="80"
//                       />
//                       <div className="ms-3 fw-bold">
//                         <h3 className="text-xl fw-bold">Tom Carry</h3>
//                         <p className="text-gray-600">Team Manager | Indore, India</p>
//                       </div>
//                     </div>
//                     <div className="d-flex align-items-center m-2  fs-5">
//                       <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
//                         <i className="fab fa-facebook-f"></i>
//                       </Link>
//                       <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
//                         {/* <i className="fab fa-twitter"></i> */}
//                         <i class="fa-brands fa-x-twitter"></i>
//                       </Link>
//                       <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
//                         <i className="fab fa-linkedin-in"></i>
//                       </Link>
//                       <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
//                         <i className="fab fa-instagram"></i>
//                       </Link>
//                       <button className=" d-flex align-items-left btn btn-outline-dark fw-bold btn ms-3 px-3 rounded-pill"> 
//                         <i class="fa-solid fa-pen pt-1 me-1"></i>
//                         Edit
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container fw-bold rounded-lg shadow-lg p-4 mb-4 w-75 rounded-3">
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h3 className="text-lg fw-bold">Personal Information</h3>
//                     <button className=" d-flex align-items-left btn btn-outline-dark fw-bold  mx-2 px-3 rounded-pill"> 
//                         <i class="fa-solid fa-pen pt-1 me-1"></i>
//                         Edit
//                       </button>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">First Name</p>
//                       <p className="font-weight-bold">Tom</p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">Last Name</p>
//                       <p className="font-weight-bold">Carry</p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">Email address</p>
//                       <p className="font-weight-bold">carrytom@gmail.com</p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">Phone</p>
//                       <p className="font-weight-bold">+91 987 654 3210</p>
//                     </div>
//                     <div className="col-12">
//                       <p className="text-gray-600">Bio</p>
//                       <p className="font-weight-bold">Team Manager</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="container  rounded-lg shadow-lg p-4 w-75 mb-4 rounded-3 fw-bold">
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h3 className="text-lg fw-bold">Address</h3>
//                     <button className=" d-flex align-items-left btn btn-outline-dark fw-bold mx-2 px-3 rounded-pill"> 
//                         <i class="fa-solid fa-pen pt-1 me-1"></i>
//                         Edit
//                     </button>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">Country</p>
//                       <p className="font-weight-bold">India</p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">City/State</p>
//                       <p className="font-weight-bold">Indore, Madhya Pradesh</p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">House/Street</p>
//                       <p className="font-weight-bold">02, Lig</p>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                       <p className="text-gray-600">Postal Code</p>
//                       <p className="font-weight-bold">452011</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default UserProfile;






import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserProfile = ({ showSidebar }) => { // Receive showSidebar prop
  // eslint-disable-next-line no-unused-vars
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="">
      <div className="d-flex flex-column flex-lg-row">
        {showSidebar && (
          <div className="shadow-lg sidebar px-4">
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
              <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="/">
                <i className="fa-solid fa-house"></i>
                <span className="mx-2">Dashboard</span>
              </Link>
              <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="/upcoming-events">
                <i className="fa-solid fa-calendar-days"></i>
                <span className="mx-2">Upcoming Events</span>
              </Link>
              <div className="mt-4">
                <h6 className="text-muted fw-bold text-uppercase px-2">Others</h6>
                <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="/userprofile">
                  <i className="fa-solid fa-user"></i>
                  <span className="mx-2">User Profile</span>
                </Link>
                <Link className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark" to="#">
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
                <div className=" bg-gray-100  ">
                  <div className=" container ">
                    <h2 className="fw-bold">Profile</h2>
                  </div>
                  <div className="container rounded-lg shadow-lg p-4 mb-4  rounded-3">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                      <div className="d-flex align-items-center mb-3 mb-md-0">
                        <img
                          alt="Tom's Profile"
                          className="w-20 h-20 rounded-circle"
                          height="80"
                          src="user-profil1.jpg"
                          width="80"
                        />
                        <div className="ms-3 fw-bold">
                          <h3 className="text-xl fw-bold">Tom Carry</h3>
                          <p className="text-gray-600">Team Manager | Indore, India</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center m-2  fs-5">
                        <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </Link>
                        <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="text-gray-800 me-2 px-2 border rounded-circle" href="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <button className=" d-flex align-items-left btn btn-outline-dark fw-bold btn ms-3 px-3 rounded-pill">
                          <i className="fa-solid fa-pen pt-1 me-1"></i>
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="container fw-bold rounded-lg shadow-lg p-4 mb-4  rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="text-lg fw-bold">Personal Information</h3>
                      <button className=" d-flex align-items-left btn btn-outline-dark fw-bold  mx-2 px-3 rounded-pill">
                        <i className="fa-solid fa-pen pt-1 me-1"></i>
                        Edit
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">First Name</p>
                        <p className="font-weight-bold">Tom</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Last Name</p>
                        <p className="font-weight-bold">Carry</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Email address</p>
                        <p className="font-weight-bold">carrytom@gmail.com</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Phone</p>
                        <p className="font-weight-bold">+91 987 654 3210</p>
                      </div>
                      <div className="col-12">
                        <p className="text-gray-600">Bio</p>
                        <p className="font-weight-bold">Team Manager</p>
                      </div>
                    </div>
                  </div>
                  <div className="container  rounded-lg shadow-lg p-4  mb-4 rounded-3 fw-bold">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="text-lg fw-bold">Address</h3>
                      <button className=" d-flex align-items-left btn btn-outline-dark fw-bold mx-2 px-3 rounded-pill">
                        <i className="fa-solid fa-pen pt-1 me-1"></i>
                        Edit
                      </button>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Country</p>
                        <p className="font-weight-bold">India</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">City/State</p>
                        <p className="font-weight-bold">Indore, Madhya Pradesh</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">House/Street</p>
                        <p className="font-weight-bold">02, Lig</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <p className="text-gray-600">Postal Code</p>
                        <p className="font-weight-bold">452011</p>
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