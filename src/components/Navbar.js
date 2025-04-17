import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useLocation } from 'react-router-dom';

const Navbar = ({ children, onToggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const showNavbar = !['/login', '/signup', '/registation'].includes(location.pathname);

  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode) {
      return storedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
      localStorage.setItem("isLoggedIn", isLoggedIn ? "true" : "false")
  }, [isLoggedIn])

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const notificationDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dropdownClass = isMobileView ? "dropdown-menu" : "dropdown-menu-end";

  const handleToggle = () => {
    onToggleSidebar();
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      {showNavbar && (
        <nav className="navbar navbar-expand-lg navbar-light shadow-lg ">
          <div className="container-fluid ">
            <Link className="navbar-brand" to="/">
              The Gathering Place
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fw-bold mx-lg-4 my-2" id="navbarSupportedContent">
              <form className="container-fluid mx-lg-4">
                <div className="input-group w-lg-50 ms-lg-2">
                  <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon1" />
                  <button type="submit"><i className="fa fa-search"></i></button>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center ">
              <button className="btn btn-light border rounded-circle me-2" onClick={toggleDarkMode}>
                {darkMode ? <i className="fa-solid fa-sun "></i> : <i className="fa-solid fa-moon me-1"></i>}
              </button>

              {isLoggedIn && (
              <div className="dropdown mx-2" ref={notificationDropdownRef}>
                <Link className="btn btn-light border rounded-circle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-bell "></i>
                </Link>
                <ul className={`dropdown-menu p-0 ${dropdownClass}`} style={{ maxWidth: '350px' }}>
                   <li className="p-3 border-bottom">
                     <div className="d-flex justify-content-between align-items-center">
                       <h6 className="mb-0">Notification</h6>
                       <button className="btn btn-sm btn-outline-secondary">×</button> 
                     </div>
                   </li>
                   <li>
                     <div className="list-group list-group-flush">
                       <Link to="#" className="list-group-item list-group-item-action">
                         <div className="d-flex w-100 justify-content-start align-items-center">
                           <img src="user-profil2.jpg" alt="User" className="rounded-circle me-3" width="40" height="40" />
                           <div className="w-100">
                             <h6 className="mb-1 text-truncate">Emaiy requests...</h6>
                             <p className="mb-1 text-sm">Project • 5 min ago</p>
                           </div>
                         </div>
                       </Link>
                       <Link to="#" className="list-group-item list-group-item-action">
                         <div className="d-flex w-100 justify-content-start align-items-center">
                           <img src="user-profil1.jpg" alt="User" className="rounded-circle me-3" width="40" height="40" />
                           <div className="w-100">
                             <h6 className="mb-1 text-truncate">Alen requests...</h6>
                             <p className="mb-1 text-sm">Project • 8 min ago</p>
                           </div>
                         </div>
                       </Link>
                       <Link to="#" className="list-group-item list-group-item-action">
                         <div className="d-flex w-100 justify-content-start align-items-center">
                           <img src="user-profil2.jpg" alt="User" className="rounded-circle me-3" width="40" height="40" />
                           <div className="w-100">
                             <h6 className="mb-1 text-truncate">kelly requests...</h6>
                             <p className="mb-1 text-sm">Project • 15 min ago</p>
                           </div>
                         </div>
                       </Link>
                       <Link to="#" className="list-group-item list-group-item-action">
                         <div className="d-flex w-100 justify-content-start align-items-center">
                           <img src="user-profil1.jpg" alt="User" className="rounded-circle me-3" width="40" height="40" />
                           <div className="w-100">
                             <h6 className="mb-1 text-truncate">Zonty Philips requests...</h6>
                             <p className="mb-1 text-sm">Project • 1 hr ago</p>
                           </div>
                         </div>
                       </Link>
                     </div>
                   </li>
                   <li className="p-3 border-top">
                     <Link to="#" className="btn btn-block btn-outline-secondary">View All Notifications</Link>
                   </li>
                 </ul>
              </div>
              )}

              {isLoggedIn && (
                <div id='profileDropdown' className="profile-dropdown dropdown border rounded-circle mx-2" ref={profileDropdownRef}>
                  <img
                    alt="User's profile"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="dropdown-toggle rounded-circle shadow-lg"
                    height="40"
                    src="pp.jpg"
                    width="40"
                  />
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><Link className="dropdown-item" to="/userprofile"><i className="fa-solid fa-user-pen me-2"></i>Edit Profile</Link></li>
                    <li><Link className="dropdown-item" to="/change-password"><i className="fa-solid fa-pen-to-square me-2"></i>Change Password</Link></li>
                    <li><Link className="dropdown-item" to="#"><i className="fa-solid fa-gear me-2"></i>Account Settings</Link></li>
                    <li><Link className="dropdown-item" to="#"><i className="fa-solid fa-info me-2 ps-2 "></i>Support</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket me-2"></i>Sign out</button></li>
                  </ul>
                </div>
              )}

              {!isLoggedIn && (
                // <div id='nav-login' className='mx-2'>
                //   <Link
                //     id="loginBtn"
                //     className="btn btn-light border rounded-circle"
                //     to="/login"
                //   >
                //     <i className="fa-solid fa-user"></i>
                //   </Link>
                // </div>

                <div className="btn-group" ref={notificationDropdownRef}>
                  <button type="button" className="rounded-circle shadow-lg" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-user"></i>
                  </button>
                  {/* <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button> */}
                  <ul className={`dropdown-menu ${dropdownClass}`}>
                    <li><Link className="dropdown-item" to="/login">Admin</Link></li>
                    <li><Link className="dropdown-item" to="#">Manager</Link></li>
                    <li><Link className="dropdown-item" to="#">Member</Link></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="#">Guest</Link></li>
                  </ul>
                </div>
                
                
              )}
            </div>
          </div>
        </nav>
      )}
      {children}
    </>
  );
};

export default Navbar;