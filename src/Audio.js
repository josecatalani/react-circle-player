import React, { Component } from 'react'

class Audio extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount(){
		const audio = this.elem;
		const { onPlay, onPause, onEnded, onError, onSeeking } = this.props

		audio.addEventListener('play', (e) => {
			console.log("started play")
			onPlay(e)
		})

		audio.addEventListener('pause', (e) => {
			console.log("paused")
			onPause(e)
		})

		audio.addEventListener('ended', (e) => {
			console.log("ended")
			onEnded(e)
		})
		
		audio.addEventListener('error', (e) => {
			console.log("paused")
			onError(e)
		})

		audio.addEventListener('seeking', (e) => {
			console.log("seeking")
			onSeeking(e)
		})

		audio.addEventListener('loadstart', (e) => {
			console.log("loadstart")
		})
	}

	componentWillReceiveProps (nextProps) {
		if(this.props.playing != nextProps.playing) {
			if(nextProps.playing) {
				this.elem.play()
			} else {
				this.elem.pause()
			}
		}
	}

	render() {
		return (
			<div className="circle-player-audio">
				<audio 
					ref={(ref) => { this.elem = ref; }}
					controls={this.props.controls}
					loop={this.props.loop}
					muted={this.props.muted}
					autoPlay={this.props.autoPlay}
					onPlay={this.props.onPlay}
					src={this.props.src}
				>
				</audio>
			</div>
		)
	}
}

export default Audio
