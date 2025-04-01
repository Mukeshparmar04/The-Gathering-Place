import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Registation from "./components/Registation"; // Renamed for consistency
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Events from './components/Events';
import Main from './components/Main';
import UpcomingEvents from './components/UpcomingEvents';
import UserProfile from './components/UserProfile';
import { useState } from 'react'; // Import useState for managing login state

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <main className="container mt-4"> {/* Use main for semantic HTML */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} /> {/* Updated route */}
          <Route path="/registation" element={<Registation />} /> {/* Updated route */}
          <Route path="/main" element={<Main />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;