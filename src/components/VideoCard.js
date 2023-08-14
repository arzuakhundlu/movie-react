import React, { Component } from 'react'

export class VideoCard extends Component {
  render() {
    return (
        <div className="continue_watching_card">
            <video controls type="video/mp4" src="https://www.youtube.com/watch?v=2QKg5SZ_35I&ab_channel=SonyPicturesEntertainment"></video>
            <h3>Jumanji</h3>
        </div>
    )
  }
}

export default VideoCard