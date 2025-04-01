import React from 'react';
import { Link } from 'react-router-dom';

const FeedItems = () => {
  const feedData = [
    { imageUrl: 'cardImage/card1.jpg', title: 'Post 1', content: 'Content 1', link: '/post/1' },
    { imageUrl: 'cardImage/card2.jpg', title: 'Post 2', content: 'Content 2', link: '/post/2' },
    { imageUrl: 'cardImage/card3.jpg', title: 'Post 3', content: 'Content 3', link: '/post/3' },
    { imageUrl: 'cardImage/card4.jpg', title: 'Post 4', content: 'Content 4', link: '/post/4' },
    { imageUrl: 'cardImage/card5.jpg', title: 'Post 5', content: 'Content 5', link: '/post/5' },
    { imageUrl: 'cardImage/card6.jpg', title: 'Post 6', content: 'Content 6', link: '/post/6' },
    // ... more feed items
  ];

  return (
    <div className="row">
      {feedData.map((item, index) => (
        <div className="col-md-6 mb-4" key={index}>
          <div className="card h-100">
            <img src={item.imageUrl} className="card-img-top" alt={item.title} style={{height: "200px", objectFit:"cover"}}/>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.content}</p>
              <Link to={item.link} className="btn btn-primary">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedItems;