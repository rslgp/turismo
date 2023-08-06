// ParentComponent.js
import React, { useState } from 'react';
import PostCard from './PostCard/PostCard'

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [children, setChildren] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents form submission
      setChildren([...children, {titulo:inputValue, descricao:inputValue2}]);
      setInputValue('');
    }
  };

  return (
    <div>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder='Titulo'
        />
        <input
            type="text"
            value={inputValue2}
            onChange={handleInputChange2}
            onKeyDown={handleKeyDown}
            placeholder='descricao'
        />

    {children.map((childValue, index) => (
        
      <>
      <PostCard
        avatar="https://sandstormit.com/wp-content/uploads/2021/06/incognito-2231825_960_720-1.png"
        username={childValue.titulo}
        content={childValue.descricao}
        rating={childValue.rating ? childValue.rating : 0}
      />
      </>
      
    ))}

      
    </div>
  );
};

export default ParentComponent;
