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

    return <div
      className='SoundButton bp3-card bp3-elevation-2 bp3-interactive'
      style={
        this.props.state === ButtonStates.playing
          ? { animation: `SoundButton_pulse_${id} 1s ease-out 0s alternate infinite` }
          : {}
      }
      onClick={() => {
        this.props.play()
      }} >
      <style>{`
        @keyframes SoundButton_pulse_${id} {
          0% {
            background-color: rgb(48, 64, 77);
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
        {/* <Spinner /> */}
      </div>
    </div>
  }
}
