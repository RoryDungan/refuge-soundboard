import React from 'react'

import SoundButton, { ButtonStates } from './SoundButton'

const tracks = [
  ['XXYYXX - XXYYXX - 01 About You.mp3', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav'],
  ['XXYYXX - XXYYXX - 02 Good Enough.mp3', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav'],
  ['Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav'],
  ['Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav']
]

export default class SoundBoard extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTrack: '',
      loading: false
    }

    this.onPlaybackFinished = this.onPlaybackFinished.bind(this)
    this.onLoadingFinished = this.onLoadingFinished.bind(this)
  }

  playAudio (src) {
    this.audioElement.src = src
    this.setState({
      ...this.state,
      activeTrack: src,
      loading: true
    })
    this.audioElement.pause()
    this.audioElement.load()
    this.audioElement.play()
  }

  onLoadingFinished () {
    this.setState({
      ...this.state,
      loading: false
    })
  }

  onPlaybackFinished () {
    this.setState({
      ...this.state,
      activeTrack: ''
    })
  }

  render () {
    const createSoundButton = src =>
      <SoundButton
        key={src}
        play={() => this.playAudio(src)}
        state={
          this.state.activeTrack === src
            ? this.state.loading
              ? ButtonStates.loading
              : ButtonStates.playing
            : ButtonStates.inactive
        }
      />

    const createButtonRow = srcs =>
      <div style={{ display: 'flex '}}>
        {srcs.map(createSoundButton)}
      </div>

    return <div>
      <audio ref={element => {
        if (!element) {
          return
        }

        this.audioElement = element
      }} />

      {tracks.map(createButtonRow)}

    </div>
  }

  componentDidMount () {
    this.audioElement.addEventListener('loadeddata', this.onLoadingFinished)
    this.audioElement.addEventListener('ended', this.onPlaybackFinished)
  }

  componentWillUnmount () {
    this.audioElement.removeEventListener('loadeddata', this.onLoadingFinished)
    this.audioElement.removeEventListener('ended', this.onPlaybackFinished)
  }
}
