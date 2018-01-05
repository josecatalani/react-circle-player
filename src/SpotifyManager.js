import React, { Component } from 'react'

class SpotifyManager extends Component {
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
                    if(json.error) {
                        throw (`Erro: ${json.error.status}: ${json.error.message}`)
                    }
                    return json
                }).catch(error => {
                    throw error
                })
    }

    componentDidMount(){
        if(this.props.spotifyTrackId != "") {
            if(this.props.spotifyToken == "") {
                throw "Required Spotify Token";
            }
            else {
                this.getSpotifyTrack()
                    .then(track => {
                        console.log(track)
                        const cover = track.album.images[0].url
                        const src = track.preview_url
                        
                        this.props.setPlayerData(src, cover)
                    })
                    .catch(err => {
                        console.error(err)
                    });
            }
        }
    }

    render() {
        return null
    }
}

export default SpotifyManager
