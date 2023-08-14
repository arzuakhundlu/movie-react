import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import ViewAllbtn from './ViewAllbtn'
import VideoCard from './VideoCard'

export class VideoSection extends Component {
  render() {
    return (
        <section>
            <div className="container">
                <SectionHeader title="Continue watching" />
                <ViewAllbtn />
                <div className="continue_watching_container">
                   <VideoCard />
                   <VideoCard />
                   <VideoCard />
                </div>
            </div>
        </section>
    )
  }
}

export default VideoSection