// PostCard.js
import React from 'react';
import './PostCard.css';

const PostCard = ({ avatar, username, content }) => {
  return (
    <div className="post-card">
      <div className="avatar">
        <img src={avatar} alt="User Avatar" />
      </div>
      <div className="post-content">
        <h3>{username}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PostCard;
