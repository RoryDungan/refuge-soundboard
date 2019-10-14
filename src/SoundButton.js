import React from 'react'

export default class SoundButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      playing: false
    }

    this.onPlaybackFinished = this.onPlaybackFinished.bind(this)
  }

  render () {
    return <div
      className='bp3-card bp3-elevation-1 bp3-interactive'
      style={{
        flex: '1 1 auto',
        margin: '10px',
        backgroundColor: this.state.playing ? 'green' : 'gray'
      }}
      onClick={ () => {
        console.log('click!')
        this.audioElement.play()
        this.setState({ ...this.state, playing: true })
      }} >
      <audio ref={element => {
        if (!element) {
          return
        }

        this.audioElement = element
      }}>
        <source src={ this.props.src }/>
      </audio>
    </div>
  }

  componentDidMount () {
    this.audioElement.addEventListener('ended', this.onPlaybackFinished)
  }

  componentWillUnmount () {
    this.audioElement.removeEventListener('ended', this.onPlaybackFinished)
  }

  onPlaybackFinished () {
    this.setState({ ...this.state, playing: false })
  }
}
