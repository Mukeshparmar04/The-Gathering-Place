// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const registeredNumbers = ["8815242848","9876543210", "8765432109", "7654321098"]; // Fake database


// const Login = () => {
//   const navigate = useNavigate();
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [mobile, setMobile] = useState("");

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   localStorage.setItem("isLoggedIn", "true");
//   //   localStorage.setItem("isAdmin", isAdmin.toString()); // Store admin status
//   //   navigate("/userprofile");
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store admin status
//     localStorage.setItem("isLoggedIn", "true");
//     localStorage.setItem("isAdmin", isAdmin.toString());

//     if (registeredNumbers.includes(mobile)) {
//       navigate("/userprofile");
//     } else {
//       navigate("/signup"); // Redirect to SignUp if not registered
//     }
//   };
  

//   return (
//     <div className="d-flex align-items-center justify-content-center min-vh-100 font-roboto ">
//       <div className=" fw-bold font-roboto shadow-lg  m-4 w-75 rounded-3">
//         <div className="w-100 p-4 p-md-5">
//           <Link className="text text-sm mb-2 d-inline-block" to="/">
//             &lt; Back to dashboard
//           </Link>
//           <h1 className="text-2xl fw-bold mb-4">Sign In</h1>
//           <p className="text-secondary mb-4">
//             Enter your email and password to sign in!
//           </p>

//           <div className="d-flex mb-2 ">
//             <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center w-50 mr-2 me-2">
//               <i className="fa-brands fa-google mx-2"></i>
//               Sign in with Google
//             </button>
//             <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center w-50 ms-2">
//               <i className="fa-brands fa-x-twitter mx-2"></i>
//               Sign in with X
//             </button>
//           </div>
//           <div className="d-flex align-items-center justify-content-between">
//             <hr className="w-100 border-secondary" />
//             <span className="px-3 text-secondary">Or</span>
//             <hr className="w-100 border-secondary" />
//           </div>
//           <div className="my-4 mb-6">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label font-weight-bold " htmlFor="name">
//                   Name
//                   <span className="text-danger mx-1">*</span>
//                 </label>
//                 <input
//                   className="form-control "
//                   id="name"
//                   type="name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="col-md-6">
//                     <label htmlFor="inputPhone" className="form-label">
//                       Phone No.
//                     </label>
//                     <input
//                       type="tel"
//                       className="form-control"
//                       id="inputPhone"
//                       name="phone"
//                       placeholder="Enter your phone no."
//                       required
//                       pattern="[0-9]{10}"
//                       title="Please enter a 10-digit phone number"
//                       value={}
//                       onChange={}
//                     />
//                   </div>

//               <div className="d-flex align-items-center justify-content-between ">
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     checked={isAdmin}
//                     onChange={(e) => setIsAdmin(e.target.checked)}
//                   />
//                   <label className="form-check-label text-secondary">
//                     Login as Admin
//                   </label>
//                 </div>
//                 <Link className="text-primary" to="/forgot-password">
//                   Forgot password?
//                 </Link>
//               </div>
//               <div className="d-flex justify-content-center mt-2">
//                 <button
//                   className="btn btn-primary fw-bold w-100"
//                   type="submit"
//                 >
//                   Sign In
//                 </button>
//               </div>
//             </form>
//             <div className="d-flex align-items-center justify-content-between ">
//               <p className="text-secondary mt-2">
//                 Don't have an account?
//                 <Link className="text-primary mx-1" to="/signup">
//                   Sign Up
//                 </Link>
//               </p>
//             </div>
//           </div>
//           <p className="text-center text-muted text-sm mt-4">
//             &copy;2025 Connect Locally, Live Globally All rights reserved.
//           </p>
//         </div>
//       </div>

//       <div className="d-none d-md-flex w-50 text-white align-items-center justify-content-center rounded-3 shadow-lg me-4">
//         <div
//           style={{
//             backgroundImage: 'url("back2.jpeg")',
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             height: "100vh",
//             width: "100%",
//           }}
//           className="d-flex align-items-center justify-content-center shadow-lg"
//         >
//           <div className="text-center">
//             <img
//               alt="The Gathering Place logo"
//               className="mx-auto mb-4"
//               height="200"
//               src="logo.svg"
//               width="200"
//             />
//             <h1 className="h3 fw-bold text-dark mb-2">The Gathering Place</h1>
//             <p className="text-dark">Connect Locally, Live Globally</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Form, Button, Container } from "react-bootstrap";

// const registeredNumbers = ["9876543210", "8765432109", "7654321098"]; // Fake database

// const CheckMobile = () => {
//   const [mobile, setMobile] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (registeredNumbers.includes(mobile)) {
//       navigate("/page1"); // Redirect to Page1 if registered
//     } else {
//       navigate("/signup"); // Redirect to SignUp if not registered
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <h2 className="text-center">Check Mobile Number</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Enter Mobile Number</Form.Label>
//           <Form.Control
//             type="tel"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             required
//             maxLength={10}
//             pattern="[0-9]{10}"
//             placeholder="Enter 10-digit mobile number"
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">Check</Button>
//       </Form>
//     </Container>
//   );
// };

// export default CheckMobile;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const registeredNumbers = ["8815242848", "9876543210", "8765432109", "7654321098"]; // Fake database

const Login = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isAdmin", isAdmin.toString());

    if (registeredNumbers.includes(mobile)) {
      navigate("/userprofile");
    } else {
      alert("User not found. Please sign up.");
      navigate("/signup");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 font-roboto ">
      <div className=" fw-bold font-roboto shadow-lg   m-4 w-75 rounded-3">
        <div className="w-100 p-4 p-md-5">
          <Link className="text text-sm mb-2 d-inline-block" to="/">
            &lt; Back to dashboard
          </Link>
          <h1 className="text-2xl fw-bold mb-4">Sign In</h1>
          <p className="text-secondary mb-4">
            Enter your phone number to sign in!
          </p>

          <div className="my-4 mb-6">
            <form onSubmit={handleSubmit}>
            <div className="col-md-12 mb-3">
                    <label htmlFor="inputName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputName"
                      name="firstName"
                      placeholder="Enter your name"
                      pattern="[a-z, A-Z]{3,15}"
                      title="Please enter a  valid name"
                      required
                      // value={Name}
                      // onChange={handleChange}
                    />
                  </div>
              <div className="col-md-12 mb-3">
                <label htmlFor="inputPhone" className="form-label">
                  Phone No.
                  <span className="text-danger mx-1">*</span>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhone"
                  name="phone"
                  placeholder="Enter your 10-digit phone no."
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  value={mobile}
                  onChange={handleMobileChange}
                />
              </div>

              <div className="d-flex align-items-center justify-content-between ">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                  />
                  <label className="form-check-label text-secondary">
                    Login as Admin
                  </label>
                </div>
                {/* You might not need a "Forgot password?" link for phone number login */}
                <Link className="text-primary" to="/forgot-password">
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
            <div className="d-flex align-items-center justify-content-between ">
              <p className="text-secondary mt-2">
                Don't have an account?
                <Link className="text-primary mx-1" to="/signup">
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

      <div className="d-none d-md-flex w-50 text-white align-items-center justify-content-center rounded-3 shadow-lg me-4">
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
          <div className="text-center">
            <img
              alt="The Gathering Place logo"
              className="mx-auto mb-4"
              height="200"
              src="logo.svg"
              width="200"
            />
            <h1 className="h3 fw-bold text-dark mb-2">The Gathering Place</h1>
            <p className="text-dark">Connect Locally, Live Globally</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;