import React from 'react';
import './App.css';
import SoundButton from './SoundButton';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <SoundButton src='Cowbell.wav'/>
      </header>
    </div>
  )
}

export default App
