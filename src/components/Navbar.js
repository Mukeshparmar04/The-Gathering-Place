import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = ({ isLoggedIn, handleLogout }) => {
  let location = useLocation();


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: 'red' }}>
      <div className="container-fluid">
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            {isLoggedIn && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/userprofile" ? "active" : ""}`}
                  to="/userprofile"
                >
                  User-Profile
                </Link>
              </li>
            )}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Category
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/upcoming-events">
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Category 2
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Category 3
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-2" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">Search</button>
          </form>
          {isLoggedIn && (
            <Link className="btn btn-danger my-2" to="/" role="button" onClick={handleLogout}>Logout</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;