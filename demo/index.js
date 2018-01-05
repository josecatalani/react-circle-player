import React from 'react';
import ReactDOM from 'react-dom';
import CirclePlayer from '../dist/index';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			chefePlayer: false
		}

		this.onChangeChefe = this.onChangeChefe.bind(this);
	} 
	
	onChangeChefe(status) {
		this.setState({
			chefePlayer: status
		}, () => {
			console.log(this.state)
		})
	}

	render() {
		return (
			<div>
				<CirclePlayer
					width={100}
					height={100}
					playing={this.state.chefePlaying}
					onChange={this.onChangeChefe}
					onPlay={()=>{}}
					onPause={()=>{}}
					onEnded={()=>{}}
					spotifyTrackId={"0K1oCudr2sTfkuNaFL1Dyo"}
					spotifyToken={"BQBSOEbjVXdir9wF8qY3Ifrke-lZXdO2xmuEEKw_EH_LKmuyf0rhD8XnUL-Ck_WIycD9418hK-7R02Y4etw_OzUVZhitCIniXJuY5sA9jDtbahEHYkjOMQ1Wg5x8N_K4kY5ebnJ063mCISot"}
					/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));
