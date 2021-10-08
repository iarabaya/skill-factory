import React from 'react';
import './App.css';
import Catalog from './components/catalog/Catalog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avalith Skill Factory</h1>
        <h3>Catalog App 2</h3>
      </header>
      <div className="App-body">
        <Catalog />
      </div>
    </div>
  );
}

export default App;
