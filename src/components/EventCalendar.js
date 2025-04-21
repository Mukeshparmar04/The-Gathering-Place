import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([
    { date: new Date(2025, 1, 1), title: 'Community Meetup', color: 'danger', details: 'Join us for our monthly community gathering!' },
    { date: new Date(2025, 2, 6), endDate: new Date(2025, 2, 8), title: 'Heritage Celebrations', color: 'primary', details: 'Three days of cultural events and exhibitions.' },
    { date: new Date(2025, 3, 9), title: 'Awareness Program', color: 'success', details: 'Learn about environmental sustainability.' },
    { date: new Date(2025, 4, 9), title: 'Award ceremony', color: 'warning', details: 'Recognizing outstanding achievements.' },
    { date: new Date(2025, 5, 11), title: 'Conference', color: 'info', details: 'Industry leaders discussing the latest trends.' },
    { date: new Date(2025, 6, 13), title: 'Public film screenings', color: 'secondary', details: 'Enjoy classic and independent films under the stars.' },
    { date: new Date(2025, 7, 16), title: 'Go Green Events', color: 'dark', details: 'Participate in tree planting and recycling initiatives.' },
    { date: new Date(2025, 8, 16), title: 'Open Mic Nights', color: 'dark', details: 'Share your talent in a relaxed and supportive environment.' },
    { date: new Date(2025, 9, 27), title: 'Charity:Raise Money', color: 'info', details: 'Support a noble cause by joining our fundraising event.' },
    { date: new Date(2025, 10, 27), title: 'AgriTech Expo', color: 'dark', details: 'Discover the latest innovations in agricultural technology.' },
    { date: new Date(2025, 11, 31), title: 'New Year Celebration', color: 'secondary', details: 'Ring in the new year with music and fireworks!' },
    // Add more events with start and optional end dates, details, and a Bootstrap color class
  ]);

  const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay(); // 0 for Sun
  const getMonthName = (date) => ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()];
  const isSameDate = (date1, date2) =>
    date1 &&
    date2 &&
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  const isDateInEventRange = (dateToCheck, event) => {
    const eventStartDate = new Date(event.date.getFullYear(), event.date.getMonth(), event.date.getDate());
    const eventEndDate = event.endDate
      ? new Date(event.endDate.getFullYear(), event.endDate.getMonth(), event.endDate.getDate())
      : eventStartDate;
    const dateToCheckNormalized = new Date(dateToCheck.getFullYear(), dateToCheck.getMonth(), dateToCheck.getDate());

    return dateToCheckNormalized >= eventStartDate && dateToCheckNormalized <= eventEndDate;
  };

  const getEventsOnDate = (date) => events.filter((event) => isDateInEventRange(date, event));

  const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const handleToday = () => setCurrentDate(new Date());
  const handleDayClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
  };

  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    let dayCounter = 1;

    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-start-${i}`} className="col p-0 day empty-day"></div>);
    }

    // Add the days of the month
    while (dayCounter <= daysInMonth) {
      const currentDateOfMonth = new Date(year, month, dayCounter);
      const eventsOnThisDay = getEventsOnDate(currentDateOfMonth);
      const isToday = isSameDate(currentDateOfMonth, new Date());
      const isSelected = selectedDate && isSameDate(currentDateOfMonth, selectedDate);

      days.push(
        <div
          key={dayCounter}
          className={`col p-0 day d-flex flex-column align-items-start ${isToday ? 'bg-info bg-opacity-25' : ''} ${isSelected ? 'border border-primary border-2' : ''}`}
          onClick={() => handleDayClick(dayCounter)}
          style={{ cursor: 'pointer', minHeight: '80px', border: '1px solid #eee' }}
        >
          <div className="fw-bold text-secondary mb-1">{dayCounter}</div>
          {eventsOnThisDay.slice(0, 2).map((event, index) => (
            <div
              key={index}
              className={`bg-${event.color} text-white rounded small p-1 mb-1`}
              style={{ width: '100%', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}
            >
              {event.title}
            </div>
          ))}
          {eventsOnThisDay.length > 2 && (
            <div className="bg-secondary text-white rounded small p-1 mt-auto">+{eventsOnThisDay.length - 2} more</div>
          )}
        </div>
      );
      dayCounter++;
    }

    const totalCells = 42; // 6 rows * 7 columns
    while (days.length < totalCells) {
      days.push(<div key={`empty-end-${days.length}`} className="col p-0 day empty-day border-0"></div>);
    }

    // Group the days into rows of 7
    const rows = [];
    for (let i = 0; i < days.length; i += 7) {
      rows.push(
        <div key={`row-${i / 7}`} className="row row-cols-7" style={{ height: 'auto' }}>
          {days.slice(i, i + 7)}
        </div>
      );
    }
    return rows;
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const selectedDateEvents = selectedDate ? getEventsOnDate(selectedDate) : [];

  return (
    <div className="container border rounded shadow p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-outline-secondary btn-sm" onClick={handlePrevMonth}>&lt;</button>
        <h2 className="m-0 fw-bold text-center">{getMonthName(currentDate)} {currentDate.getFullYear()}</h2>
        <button className="btn btn-outline-secondary btn-sm" onClick={handleNextMonth}>&gt;</button>
        <button className="btn btn-info btn-sm ms-2" onClick={handleToday}>Today</button>
      </div>
      <div className="row row-cols-7 mb-2 fw-bold text-secondary">
        {daysOfWeek.map((day) => (
          <div key={day} className="col text-center">{day}</div>
        ))}
      </div>
      {renderCalendarDays()}

      {/* Show Details */}
      <div className="mt-3">
        <h5 className="fw-bold">Details for {selectedDate ? selectedDate.toLocaleDateString() : 'Selected Date'}</h5>
        {selectedDateEvents.length > 0 ? (
          selectedDateEvents.map((event, index) => (
            <div key={index} className="card mb-2">
              <div className="card-body">
                <h6 className={`card-title text-${event.color}`}>{event.title}</h6>
                {event.details && <p className="card-text">{event.details}</p>}
                {event.endDate && !isSameDate(event.date, event.endDate) && (
                  <p className="card-subtitle mb-2 text-muted">
                    {event.date.toLocaleDateString()} - {event.endDate.toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>{selectedDate ? 'No events on this date.' : 'Click on a date to see details.'}</p>
        )}
      </div>
    </div>
  );
};

export default Calendar;