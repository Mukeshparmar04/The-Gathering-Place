import React from "react";
import Events from "./Events";
import Feed from "./Feed";
import { Link } from "react-router-dom";


const Home = () => {
  return (
   <>
   <Events />
   <Feed />
   <div style={{ position: 'fixed', bottom: '4vh', right: '4vh', display: 'flex', gap: '2vh' }}>
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/signup" className="btn btn-success">Register</Link>
    </div>
   </>
  );
};
export default Home;




