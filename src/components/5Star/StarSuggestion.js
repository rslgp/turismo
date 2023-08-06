import React, { useState } from 'react';
import './StarSuggestion.css';

const StarSuggestion = (props) => {
  const [rating, setRating] = useState(props.rating ? props.rating : 0);
  //const [lastRatingTime, setLastRatingTime] = useState(null);
  const lastRatingTime = sessionStorage.getItem('lastRatingTime');
  
  const handleStarClick = (value) => {
    const limitMin = 2;
    const currentTime = Date.now();
    if (!lastRatingTime || currentTime - lastRatingTime >= limitMin * 60 * 1000) {
      setRating(value);
      //setLastRatingTime(currentTime);
      sessionStorage.setItem('lastRatingTime', currentTime);
      // Here you can perform any action like submitting the rating to a server or saving it in a database
    } else {
      // The user can rate only once per 5 minutes
      alert(`You can rate only once per ${limitMin} minutes.`);
    }
  };

  return (
    <div className="star-suggestion">
      {props.msg ? 
      <>
      <span>{props.msg}</span>
      </> 
      : 
      <>
      </>}
      
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(value)}
          >
            ★
          </span>
        ))}
    </div>
  );
};

export default StarSuggestion;
