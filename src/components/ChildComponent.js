// ChildComponent.js
import React from 'react';

const ChildComponent = ({ value }) => {
  console.log('Child content:', value);
  return <div>{value}</div>;
};

export default ChildComponent;
