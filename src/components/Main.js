import React from "react";
import Events from "./Events";
import Feed from "./Feed";
// import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
    <div className="container mt-4">
      <Events />
      <Feed />
    </div>
    </>
  );
};

export default Main;
