import React from 'react'
import './App.css'
import SoundButton from './SoundButton'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

function App () {
  return (
    <div className="App">
      <div style={{ display: 'flex' }}>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
      </div>
      <div style={{ display: 'flex' }}>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
      </div>
      <div style={{ display: 'flex' }}>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
      </div>
      <div style={{ display: 'flex' }}>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
        <SoundButton src='Cowbell.wav'/>
      </div>
    </div>
  )
}

export default App
