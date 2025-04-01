import React from 'react';
import './up.css';

function UpcomingEvents() {
  const events = [
    {
      date: 'October 26, 2025',
      title: 'Community Meetup',
      location: 'Online Zoom Meeting',
      description: 'Discuss community updates and future plans.',
    },
    {
      date: 'November 10, 2025',
      title: 'Workshop: Advanced Techniques',
      location: 'City Hall Auditorium',
      description: 'Learn advanced techniques for community members.',
    },
    {
      date: 'December 15, 2025',
      title: 'Holiday Party',
      location: 'Community Center',
      description: 'End of year celebration for the community.',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Upcoming Events</h2>
      <div className="events-container shadow-lg p-4 rounded-3">
        {events.map((event, index) => (
          <div className="event" key={index}>
          <div className="date">{event.date}</div>
          <div className="title">{event.title}</div>
          <div className="location">{event.location}</div>
          <div className="description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;



