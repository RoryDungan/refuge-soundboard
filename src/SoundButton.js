import React from 'react'

export default class SoundButton extends React.Component {
  render () {
    return <div
      className='bp3-card bp3-elevation-1 bp3-interactive'
      style={{ flex: '1 1 auto', margin: '10px' }}
      onClick={ () => {
        console.log('click!')
        this.audioElement.play()
      }} >
      <audio ref={element => { this.audioElement = element }}>
        <source src={ this.props.src }/>
      </audio>
    </div>
  }
}
