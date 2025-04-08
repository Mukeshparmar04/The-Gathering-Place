// import React from "react";
// import Events from "./Events";
// import Feed from "./Feed";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <main className="">
//       {/* slidbar */}
//       <div className="d-flex flex-column flex-lg-row">
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
//                 <Events />
//                 <Feed />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </main>
//   );
// };
// export default Home;





import React, { useState, useEffect } from "react";
import Events from "./Events";
import Feed from "./Feed";
import { Link } from "react-router-dom";

const Home = ({ showSidebar }) => { // Receive showSidebar as a prop
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
            {/* ... (rest of the sidebar content) ... */}
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
                <Events />
                <Feed />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;