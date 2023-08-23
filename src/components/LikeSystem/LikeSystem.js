import React, { useState, useEffect } from 'react';
import './LikeSystem.css';

const LikeSystem = () => {
  const [likes, setLikes] = useState(0);
  const [userFeedback, setUserFeedback] = useState(null);

  useEffect(() => {
    const userFeedbackFromStorage = sessionStorage.getItem('userFeedback');
    if (userFeedbackFromStorage) {
      setUserFeedback(userFeedbackFromStorage);
    }
  }, []);

  const handleLike = () => {
    if (!userFeedback) {
      setLikes(likes + 1);
      setUserFeedback('like');
      sessionStorage.setItem('userFeedback', 'like');
    } else {
      setLikes(likes - 1);
      setUserFeedback(null);
      sessionStorage.removeItem('userFeedback');
    }
  };

  return (
    <div className="like-dislike-system">
      <button className={`like ${userFeedback === 'like' ? 'active' : ''}`} onClick={handleLike}>
        {userFeedback === 'like' ? 'Unlike' : '👍Like'}
      </button>
      <span>{likes} Likes</span>
    </div>
  );
};

export default LikeSystem;
