import React from 'react';
import './App.css';
import nbalogo from './images/nbalogo.jpg';
import Teams from './components/Teams';

function App() {

  return (
    <div className="App">
      <header className="App-header" >
        <img src={nbalogo} alt='nba logo text' />
        <h1>NBA Teams </h1>
      </header>
      <Teams />
    </div>
  );
}

export default App;
