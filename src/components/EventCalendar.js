import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const getMonthName = (date) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[date.getMonth()];
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const monthName = getMonthName(currentDate);
  const year = currentDate.getFullYear();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="col p-2 border-0"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="col p-2 border border-light text-center">
          {i}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="container p-3 border rounded shadow">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-outline-secondary" onClick={handlePrevMonth}>&lt;</button>
        <h2 className="m-0">{monthName} {year}</h2>
        <button className="btn btn-outline-secondary" onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="row mb-2 fw-bold">
        <div className="col text-center">Sun</div>
        <div className="col text-center">Mon</div>
        <div className="col text-center">Tue</div>
        <div className="col text-center">Wed</div>
        <div className="col text-center">Thu</div>
        <div className="col text-center">Fri</div>
        <div className="col text-center">Sat</div>
      </div>
      <div className="row">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;