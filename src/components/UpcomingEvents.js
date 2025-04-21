import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventCalendar from "./EventCalendar"; // Import the EventCalendar component

function UpcomingEvents({ showSidebar }) {
  // eslint-disable-next-line no-unused-vars
  const [isMobileView, setIsMobileView] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem("isAdmin") === "true";
  });

  const handleEventClick = (event) => {
    console.log("Event clicked:", event);
  };

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

  const events = [
    {
      date: "October 26, 2025",
      title: "Community Meetup",
      location: "Online Zoom Meeting",
      description: "Discuss community updates and future plans.",
    },
    {
      date: "November 10, 2025",
      title: "Workshop: Advanced Techniques",
      location: "City Hall Auditorium",
      description: "Learn advanced techniques for community members.",
    },
    {
      date: "December 15, 2025",
      title: "Holiday Party",
      location: "Community Center",
      description: "End of year celebration for the community.",
    },
  ];

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

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <main className="background-animation">
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
              <Link
                className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark text-decoration-none"
                to="/"
              >
                <i className="fa-solid fa-house"></i>
                <span className="mx-2">Dashboard</span>
              </Link>
              <Link
                className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark text-decoration-none"
                to="/upcoming-events"
              >
                <i className="fa-solid fa-calendar-days"></i>
                <span className="mx-2">Upcoming Events</span>
              </Link>
              <div className="mt-4">
                <h6 className="text-muted fw-bold text-uppercase px-2">
                  Others
                </h6>
                {/* {isLoggedIn && (
                  <Link 
                    id="userProfile"
                    className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark text-decoration-none" 
                    to="/userprofile"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="mx-2">User Profile</span>
                  </Link>
                )} */}

                {(isAdmin && isLoggedIn) && (
                  <Link
                    id="members"
                    className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark text-decoration-none"
                    to="/members"
                  >
                    <i className="fa-solid fa-users"></i>
                    <span className="mx-2">Members</span>
                  </Link>
                )}

                <Link
                  id="donation"
                  className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark text-decoration-none"
                  to="/donation"
                >
                  <i className="fa-solid fa-hand-holding-dollar"></i>
                  <span className="mx-2">Donation</span>
                </Link>
                <Link
                  className="d-flex flex-column flex-lg-row align-items-center p-2 text-dark text-decoration-none"
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
          <div className="container shadow-lg p-4 mb-4 rounded-5">
            <div className="row">
              <div className="col-12">
                <div className="container">
                  <h2 className="fw-bold mb-4">Upcoming Events</h2>
                  <div className="shadow-lg p-4 rounded-3 w-100">
                    {events.map((event, index) => (
                      <div
                        className="mb-3 pb-2 border-3 border-bottom fw-bold"
                        key={index}
                      >
                        <div className="fw-bold text-primary">{event.date}</div>
                        <div className="fs-5 mt-2">{event.title}</div>
                        <div className="text-secondary fs-8">
                          {event.location}
                        </div>
                        <div className="fs-6">{event.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container shadow-lg p-4 rounded-5">
            <h2 className="fw-bold mb-4 mt-4">Event Calendar</h2>
            <EventCalendar events={events} onEventClick={handleEventClick} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default UpcomingEvents;