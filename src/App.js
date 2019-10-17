import React from 'react'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

import SoundBoard from './SoundBoard'

import './App.css'

function App () {
  return (
    <div className="App bp3-dark">
      <header>
        <h1 className="bp3-heading">Refuge Aural Moodboard</h1>
      </header>
      <SoundBoard />
    </div>
  )
}

export default App
