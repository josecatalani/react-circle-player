import React, { Component } from 'react'
import Button from './Button'

class Controls extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { playing, onClick, color } = this.props
		
		const buttonWidth = parseInt(this.props.width * 0.5)
		const buttonHeight = parseInt(this.props.height * 0.5)
		const halfWidth = - parseInt(buttonWidth/2)
		const halfHeight = - parseInt(buttonHeight/2)

		const buttonPosition = {
			margin: `${halfHeight}px 0px 0px ${halfWidth}px`,
			position: 'absolute',
			left: '50%',
			top: '50%'
		}

		return (
	   		<div className="circle-player-controls">
			   <div style={buttonPosition}>
					<Button
						playing={playing}
						buttonWidth={ buttonWidth }
						buttonHeight={ buttonHeight } 
						color={ color }
						onClick={() => {
							onClick(!playing)
						}}
					/>
				</div>
    		</div>
		)
	}
}

export default Controls
