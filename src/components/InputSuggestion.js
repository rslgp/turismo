import React, { useState } from 'react';

const InputSuggestion = () => {
  const suggestions = ['apple', 'banana', 'orange', 'pear', 'pineapple'];
  const [inputValue, setInputValue] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Filter the suggestions based on the input value
    const filtered = value ? suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    ) : [];
    setFilteredSuggestions(filtered);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type to see suggestions"
      />
      {filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSuggestion;
