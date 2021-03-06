import React from 'react'

import SoundButton, { ButtonStates } from './SoundButton'
import sounds from './sounds.json'

import './SoundBoard.css'

const separateIntoChunks = (chunkSize, arr) => {
  if (chunkSize <= 0) {
    throw new Error('chunkSize must be a positive integer')
  }

  const numChunks = Math.ceil(arr.length / chunkSize)
  const result = []
  for (let i = 0; i < numChunks; i++) {
    result.push(arr.slice(i * chunkSize, i * chunkSize + chunkSize))
  }
  return result
}

const trackGroups = separateIntoChunks(5, sounds)
// const tracks = [
//   ['XXYYXX - XXYYXX - 01 About You.mp3', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav'],
//   ['XXYYXX - XXYYXX - 02 Good Enough.mp3', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav'],
//   ['Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav'],
//   ['Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav', 'Cowbell.wav']
// ]

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
    if (this.state.activeTrack === src) {
      this.audioElement.pause()
      this.audioElement.load()
      this.setState({
        ...this.state,
        activeTrack: '',
        loading: false
      })
    } else {
      this.audioElement.src = 'final-aac/' + src
      this.setState({
        ...this.state,
        activeTrack: src,
        loading: true
      })
      this.audioElement.pause()
      this.audioElement.load()
      this.audioElement.play()
    }
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
    const createSoundButton = ({ src, colour }) =>
      <SoundButton
        key={src}
        play={() => this.playAudio(src)}
        colour={colour}
        state={
          this.state.activeTrack === src
            ? this.state.loading
              ? ButtonStates.loading
              : ButtonStates.playing
            : ButtonStates.inactive
        }
      />

    const createButtonRow = (track, id) =>
      <div key={id} className='ButtonRow'>
        {track.map(createSoundButton)}
      </div>

    return <div className='SoundBoard'>
      <audio ref={element => {
        if (!element) {
          return
        }

        this.audioElement = element
      }} />

      {trackGroups.map(createButtonRow)}

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
