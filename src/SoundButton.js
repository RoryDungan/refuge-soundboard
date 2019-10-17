import React from 'react'
import { Spinner } from '@blueprintjs/core'

import './SoundButton.css'

export const ButtonStates = Object.freeze({
  inactive: 0,
  loading: 1,
  playing: 2
})

let id = 0
const getId = () => id++

/**
 * Button that plays a sound.
 */
export default class SoundButton extends React.Component {
  render () {
    const id = getId()
    const defaultColour = '#394b59'

    return <div
      className={
        'SoundButton bp3-card bp3-elevation-2 bp3-interactive ' +
          (this.props.state === ButtonStates.playing ? `SoundButton_playing_${id}` : `SoundButton_notplaying_${id}`)
      }
      onClick={() => {
        this.props.play()
      }} >
      <style>{`
        .SoundButton_notplaying_${id} {
          background-color: ${defaultColour} !important;
          transition-property: transform, box-shadow, background-color !important;
          transition-duration: 0.3s;
          transition-easing: ease-in-out;
        }

        .SoundButton_playing_${id} {
          animation: SoundButton_pulse_${id} 1s ease-out 0s alternate infinite;
          transition-property: transform, box-shadow, background-color !important;
          transition-duration: 0.5s;
          transition-easing: ease-in-out;
        }
        @keyframes SoundButton_pulse_${id} {
          0% {
            background-color: ${defaultColour};
          }
          100% {
            background-color: ${this.props.colour || 'red'}
          }
        }
      `}</style>
      <div
        className='Spinner'
        style={
          this.props.state === ButtonStates.loading
            ? { display: 'block' }
            : { display: 'none' }
        }>
        <Spinner />
      </div>
    </div>
  }
}
