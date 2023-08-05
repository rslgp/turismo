import React from 'react';
import Card from './components/Card';
import ParentComponent from './components/ParentComponent';
const App = () => {
  const user = {
    name: 'Rafa Leao v2',
    age: 30,
    email: 'john@example.com'
  };

  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <Card nome={user.name} sobrenome={user.sobrenome} />
      <ParentComponent/>
    </div>
  );
  
};

export default App;
