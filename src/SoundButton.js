import React from 'react'

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
      className='bp3-card bp3-elevation-1 bp3-interactive'
      style={{
        flex: '1 1 auto',
        margin: '10px',
        backgroundColor: this.props.state === ButtonStates.playing
          ? 'green' : 'gray'
      }}
      onClick={() => {
        this.props.play()
      }} >
    </div>
  }
}
