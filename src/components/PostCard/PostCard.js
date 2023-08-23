// PostCard.js
import React from 'react';
import './PostCard.css';
import StarSuggestion from '../5Star/StarSuggestion';
import LikeSystem from '../LikeSystem/LikeSystem';

const PostCard = (props) => {
  return (
    <div className="post-card">
      <div className="avatar">
        <img src={props.avatar} alt="User Avatar" />
      </div>
      <div className="post-content">
        <table>
          <tr>
            <td>
             <h3>{props.username}</h3>
            </td>
            <td>
             <LikeSystem/>
            </td>
          </tr>
          <tr>
          <td>
            <StarSuggestion rating={4}/>
              {props.ratingCount}
          </td>
          <td>
            <StarSuggestion msg={"Avaliar: "}/></td>
          </tr>
        </table>
        <p>{props.rating}</p>
      </div>
    </div>
  );
};

export default PostCard;
