import React from 'react';
import UserProfile from './UserProfile';

const userData = () => {
  const user = {
    name: 'Alice Smith',
    email: 'alice.smith@example.com',
    profilePicture: 'user-profile2.jpg',
    bio: 'Web developer and open-source contributor.',
    location: 'New York, USA',
    joined: 'March 2022',
    posts: 250,
    followers: 1200,
    following: 800,
  };

  return <UserProfile user={user} />;
};

export default userData;