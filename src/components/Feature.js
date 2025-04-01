import React from "react";

const Feature = () => {
  return (
    <>
      <div className="text-center mb-4">
        <h2 className="fw-bold">The Gathering Place - About Us...</h2>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="card">
            <img src="about1.jpg" className="card-img-top" alt="Community Overview" />
            <div className="card-body">
              <p className="card-text">Our community is built on shared interests and mutual support...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-4">
        <h2 className="fw-bold">The Gathering Place - Benefits...</h2>
      </div>
      {/* Repeat similar card structure with real content and images */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="card">
            <img src="about2.jpg" className="card-img-top" alt="Knowledge Sharing" />
            <div className="card-body">
              <h5 className="card-title">Knowledge Sharing & Social Discussions.</h5>
              <p className="card-text">Community platforms excel at knowledge sharing...</p>
            </div>
          </div>
        </div>
      </div>
      {/* Add other benefit cards */}
    </>
  );
};

export default Feature;