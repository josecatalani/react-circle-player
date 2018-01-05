import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';
import Audio from './Audio'
import Button from './Button'
import Controls from './Controls'
import Cover from './Cover'
import TrackManager from './TrackManager'

/* escutar o transitionend, caso no meio tempo o playing mudou, não ir para a proxima rodada */

class CirclePlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transitioning: false,
      audioEl: null,
      playerSrc: null,
    }

    this.emitAction = this.emitAction.bind(this)
    this.setAudioEl = this.setAudioEl.bind(this)
    this.setPlayerData = this.setPlayerData.bind(this)
    this.onPlay = this.onPlay.bind(this)
    this.onPause = this.onPause.bind(this)
  }

  setPlayerData(src, cover) {
    this.setState({
      playerSrc: src,
      playerCover: cover
    })
  }

  setAudioEl(ref) {
    console.log("aqui")
    this.setState({
      audioEl: ref
    })
  }

  emitAction(state) {
    this.props.onChange(state);
  }

  onPlay(){
    this.props.onPlay()
  }

  onPause(){
    this.props.onPause()
  }

  render() {
  	const { width, height, color, playing, loop, controls, muted, autoPlay, onPlay, spotifyWebAPIURL } = this.props;

    const circlePlayerCN = classNames("circle-player", playing ? 'is-playing' : 'is-paused');

    return (
      <div className={circlePlayerCN}
        style={{
          width: width + 'px',
          height: height + 'px',
          backgroundColor: color,
        }}>
          <Cover
            src={this.state.playerCover}
          />

          <Audio
            setAudioEl={this.setAudioEl}
            autoPlay={autoPlay}
            src={this.state.playerSrc}
            playing={playing}

            onPlay={this.onPlay}
            onPause={this.onPause}
            onEnded={this.onEnded}
            onError={this.onError}
          />

          <TrackManager
            spotifyTrackId={this.props.spotifyTrackId}
            spotifyToken={this.props.spotifyToken}
            spotifyWebAPIURL={this.props.spotifyWebAPIURL}

            setPlayerData={this.setPlayerData}
          />

          <Controls
            width={width}
            height={height}
            onClick={this.emitAction}
            playing={ playing }
            color={color}
          />
      </div>
    );
  }
}

// Proptypes
CirclePlayer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  cover: PropTypes.element,
  rotation: PropTypes.string,
  color: PropTypes.string,
  playing: PropTypes.bool,

  src: PropTypes.string,

  spotifyTrackId: PropTypes.string,
  spotifyToken: PropTypes.string,
  spotifyWebAPIURL: PropTypes.string,

  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  onError: PropTypes.func,
  onChange: PropTypes.func
};

CirclePlayer.defaultProps = {
  width: 80,
  height: 80,
  rotation: "cw",
  color: "#FFBC42",
  playing: false,

  spotifyTrackId: '',
  spotifyWebAPIURL: 'https://api.spotify.com/v1',

  onPlay: () => {},
  onPause: () => {},
  onEnded: () => {},
  onError: () => {},
  onChange: () => {},
};

export default CirclePlayer