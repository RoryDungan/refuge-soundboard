import React from 'react'

import SoundButton from './SoundButton'

export default class SoundBoard extends React.Component {
  render () {
    return <div>
      <div style={{ display: 'flex' }}>
        <SoundButton src='XXYYXX - XXYYXX - 01 About You.mp3'/>
        <SoundButton src='XXYYXX - XXYYXX - 02 Good Enough.mp3'/>
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
  }
}
