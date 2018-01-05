import React, { Component } from 'react'

class TrackManager extends Component {
    constructor(props) {
        super(props)
    
        this.getSpotifyTrack = this.getSpotifyTrack.bind(this)
    }

    getSpotifyTrack() {
        const { spotifyWebAPIURL, spotifyTrackId, spotifyToken } = this.props

        let fetchOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${spotifyToken}`,
                'Content-Type': 'application/json'
            }
        }

        return fetch(`${spotifyWebAPIURL}/tracks/${spotifyTrackId}`, fetchOptions).then(response => {
            return response.json()
        }).then(json => {
            return json
        })
    }

    componentDidMount(){
        if(this.props.spotifyTrackId != "") {
            if(this.props.spotifyToken == "") {
                throw "Required Spotify Token";
            }
            else {
                this.getSpotifyTrack().then(track => {
                    const cover = track.album.images[0].url
                    const src = track.preview_url
                    
                    this.props.setPlayerData(src, cover)
                    console.log(track)
                });
            }
        }
    }

    render() {
        return null
    }
}

export default TrackManager
