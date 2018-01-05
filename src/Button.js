import React, { Component } from 'react'
import Image from './Image'

import PlayButton from './PlayButton'
import PauseButton from './PauseButton'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { onClick, playing, color, buttonWidth, buttonHeight } = this.props

        const Icon = playing ? (
            <PauseButton color={color} width={buttonWidth} height={buttonHeight} />
        ) : (
            <PlayButton color={color} width={buttonWidth} height={buttonHeight} />
        )
        
        return (
            <a href="#" className="circle-player-button" onClick={ onClick }>
                {Icon}
            </a>
        )
    }
}

export default Button
