import React from 'react'

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
      style={{
        // backgroundColor: this.props.state === ButtonStates.playing
        //   ? 'green' : 'gray'
      }}
      onClick={() => {
        this.props.play()
      }} >
    </div>
  }
}
