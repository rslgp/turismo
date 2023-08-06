import React from 'react';
import ParentComponent from './components/ParentComponent';
import YourApp from './components/YouApp';
import InputSuggestion from './components/InputSuggestion';
import StarSuggestion from './components/5Star/StarSuggestion';
const App = () => {
  const user = {
    name: 'Rafa Leao v2',
    age: 30,
    email: 'john@example.com'
  };

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <ParentComponent/>
      <YourApp></YourApp>
      <InputSuggestion/>
      <StarSuggestion/>
    </div>
  );
  
};

export default App;
