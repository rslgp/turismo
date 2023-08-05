// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import Card from './Card'

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [children, setChildren] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents form submission
      setChildren([...children, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div>
        
    {children.map((childValue, index) => (
        
      <>
      <Card nome={childValue}/>
      <ChildComponent key={index} value={childValue} />
      </>
      
    ))}

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default ParentComponent;
