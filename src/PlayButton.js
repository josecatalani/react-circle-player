import React, { Component } from 'react'

class PlayButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <svg
                fill={this.props.color}
                stroke={this.props.color}
                height={this.props.height}
                width={this.props.width}
                viewBox="0 0 1200 1200">
                <path
                    d="M 600,1200 C 268.65,1200 0,931.35 0,600 0,268.65 268.65,0 600,0 c 331.35,0 600,268.65 600,600 0,331.35 -268.65,600 -600,600 z M 450,300.45 450,899.55 900,600 450,300.45 z"
                    />
            </svg>
        )
    }
}

PlayButton.defaultProps = {
    width: 40,
    height: 40,
    color: "pink"
}

export default PlayButton
