import React from 'react';
import './UserProfile.css'; 

const UserProfile = ({ user }) => {
  // Placeholder user data if 'user' prop is not provided
  const userData = user || {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'user-profil1.jpg', // Replace with actual image URL
    bio: 'Software developer and community enthusiast.',
    location: 'Indore, India',
    joined: 'January 2023',
    posts: 120,
    followers: 500,
    following: 200,
  };

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <img
          src={userData.profilePicture}
          alt={`${userData.name}'s profile`}
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>{userData.name}</h2>
          <p className="bio">{userData.bio}</p>
          <p className="location">Location: {userData.location}</p>
          <p className="joined">Joined: {userData.joined}</p>
        </div>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-value">{userData.posts}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat">
          <span className="stat-value">{userData.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-value">{userData.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
      <div className="profile-contact">
          <p>Email: {userData.email}</p>
      </div>
      {/* Add more sections for user posts, photos, etc. */}
    </div>
  );
};

export default UserProfile;