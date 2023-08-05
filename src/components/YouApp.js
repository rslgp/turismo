// YourApp.js
import React from 'react';
import PostCard from './PostCard/PostCard';

const YourApp = () => {
  return (
    <div>
      <PostCard
        avatar="https://sandstormit.com/wp-content/uploads/2021/06/incognito-2231825_960_720-1.png"
        username="JohnDoe"
        content="Hello, this is my round post card!"
      />
      <PostCard
        avatar="URL_TO_YOUR_AVATAR_IMAGE"
        username="JaneSmith"
        content="I'm loving this round post card component!"
      />
    </div>
  );
};

export default YourApp;
