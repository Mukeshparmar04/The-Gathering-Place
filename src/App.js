import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registation from "./components/Registation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Events from './components/Events';
import Main from './components/Main';
import UpcomingEvents from './components/UpcomingEvents';
import UserProfile from './components/UserProfile';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import EventCalendar from './components/EventCalendar';
import { useState } from 'react';
import Members from './components/Members';

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <Navbar onToggleSidebar={toggleSidebar} />
      <main className="">
        <Routes>
          <Route path="/" element={<Home showSidebar={showSidebar} />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/upcoming-events" element={<UpcomingEvents showSidebar={showSidebar} />} />
          <Route path="/event-calendar" element={<EventCalendar />} />
          <Route path="/registation" element={<Registation />} />
          <Route path="/main" element={<Main />} />
          <Route path="/userprofile" element={<UserProfile showSidebar={showSidebar} />} />
          <Route path="/members" element={<Members showSidebar={showSidebar} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;