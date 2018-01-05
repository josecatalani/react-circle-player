import React, { Component } from 'react'

class PauseButton extends Component {
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
                    d="M 600,0 C 268.62914,0 0,268.62914 0,600 c 0,331.37086 268.62914,600 600,600 331.37086,0 600,-268.62914 600,-600 C 1200,268.62914 931.37086,0 600,0 z m -269.16515,289.38 181.71397,0 0,621.24 -181.71397,0 0,-621.24 z m 356.61633,0 181.71399,0 0,621.24 -181.71399,0 0,-621.24 z" 
                    />
            </svg>
        )
    }
}

PauseButton.defaultProps = {
    width: 40,
    height: 40,
    color: "#FFFFFF"
}

export default PauseButton
