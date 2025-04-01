import React from 'react';
import FeedItems from './FeedItems';

const Feed = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Top Feed</h2>
      <FeedItems />
    </div>
  );
};

export default Feed;

