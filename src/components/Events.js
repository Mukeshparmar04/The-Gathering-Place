import React from "react";

const Events = () => {
  const eventsData = [
    {
      imageUrl: "event1.jpg",
      title: "Community Gathering",
      date: "October 26, 2025",
      location: "Online Zoom Meeting",
      description: "Discuss community updates and future plans.",
    },
    {
      imageUrl: "event2.jpg",
      title: "Advanced Techniques Workshop",
      date: "November 10, 2025",
      location: "City Hall Auditorium",
      description: "Learn advanced techniques for community members.",
    },
    {
      imageUrl: "event3.jpg",
      title: "New Year Celebration",
      date: "December 31, 2025",
      location: "Community Center",
      description: "End of year celebration for the community.",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="row">
        {eventsData.map((event, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100"> {/* Added h-100 for equal height */}
              <img src={event.imageUrl} className="card-img-top" alt={event.title} style={{height: "200px", objectFit:"cover"}}/>
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  <strong>Date:</strong> {event.date}<br />
                  <strong>Location:</strong> {event.location}<br />
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
