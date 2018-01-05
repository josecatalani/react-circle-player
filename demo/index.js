import React from 'react';
import ReactDOM from 'react-dom';
import CirclePlayer from '../dist/index';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mgmtPlayer: false,
			chefePlayer: false
		}

		this.onChangeChefe = this.onChangeChefe.bind(this);
		this.onChangeMGMT = this.onChangeMGMT.bind(this);
	} 
	
	onChangeChefe(status) {
		this.setState({
			chefePlayer: status
		})
	}

	onChangeMGMT(status) {
		this.setState({
			mgmtPlayer: status
		})
	}

	render() {
		return (
			<div>
				<CirclePlayer
					width={100}
					height={100}
					color={"red"}
					playing={this.state.chefePlaying}
					onChange={this.onChangeChefe}
					onPlay={()=>{}}
					onPause={()=>{}}
					onEnded={()=>{}}
					spotifyTrackId={"0K1oCudr2sTfkuNaFL1Dyo"}
					spotifyToken={"BQBbH2frTX_LBS3W9Z6SjsdSrHiPm6ItfzCTVj99rG3lVEjWLLQDxCrHuHsmS5ojYAHTxaDm1QUGfEs2IP8OcNNe0rYfcvQC0VO_yCwtL-8r6ZeY2XBV329lfa0E62Ek9QPJughflaWmhgId"}
					/>
					
				<CirclePlayer
					width={300}
					height={300}
					color={"#1B4438"}
					playing={this.state.mgmtPlayer}
					onChange={this.onChangeMGMT}
					onPlay={()=>{}}
					onPause={()=>{}}
					onEnded={()=>{}}
					spotifyTrackId={"0vaf64cpnqM7COUZZkoBig"}
					spotifyToken={"BQBbH2frTX_LBS3W9Z6SjsdSrHiPm6ItfzCTVj99rG3lVEjWLLQDxCrHuHsmS5ojYAHTxaDm1QUGfEs2IP8OcNNe0rYfcvQC0VO_yCwtL-8r6ZeY2XBV329lfa0E62Ek9QPJughflaWmhgId"}
					/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
