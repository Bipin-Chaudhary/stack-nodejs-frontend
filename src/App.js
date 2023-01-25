import React from 'react';
import StackList from './components/Stack/StackList';
import Button from './components/Button/Button';
import NewStack from './components/Stack/NewStack';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Welcome to Stack NodeJS App
        </p>
      </header>
      <div>
        <StackList />
      </div>
      <Button />
      <NewStack />
    </div>
  );
}

export default App;
