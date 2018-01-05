import React, { Component } from 'react'
import Image from './Image'

import DefaultCover from './default-cover.png'

class Cover extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let coverImage = <Image src={DefaultCover}/>

        if(this.props.src) {
            coverImage = <Image src={this.props.src}/>
        }

        return (
            <div className="circle-player-cover">
                {coverImage}
            </div>
        )
    }
}

export default Cover
