import React from 'react'
import { Spinner } from '@blueprintjs/core'

import './SoundButton.css'

export const ButtonStates = Object.freeze({
  inactive: 0,
  loading: 1,
  playing: 2
})

/**
 * Button that plays a sound.
 */
export default class SoundButton extends React.Component {
  render () {
    return <div
      className='SoundButton bp3-card bp3-elevation-2 bp3-interactive'
      style={
        this.props.state === ButtonStates.playing
          ? { animation: 'pulse 1s ease-out 0s alternate infinite' }
          : {}
      }
      onClick={() => {
        this.props.play()
      }} >
      <style>{`
        @keyframes pulse {
          0% {
            background-color: initial;
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
