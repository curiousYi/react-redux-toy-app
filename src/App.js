import React from 'react';
import Body from './components/Body'
import './App.css';

function App() {
  const formHeader = 'Pokemon Trainer Application';
  return (
    <div className="App">
      <header className="App-header">
        <h1>App Header</h1>
        <Body
          formHeader={formHeader}
          id="mainId"
        ></Body>
      </header>
    </div>
  );
}

export default App;
