import React from 'react'

export default class SoundButton extends React.Component {
  render () {
    return <div>
      <audio ref={element => { this.audioElement = element }}>
        <source src={ this.props.src }/>
      </audio>
      <button onClick={ () => {
        console.log('click!')
        this.audioElement.play()
      }}>
        hello
      </button>
    </div>
  }
}
