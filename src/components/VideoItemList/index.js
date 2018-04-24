import React from 'react'
import VideoItem from './VideoItem'

const VideoItemList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoItem onSelect={props.onVideoSelect} key={video.etag} video={video} />
    })
    return (
        <ul className="col-md-auto list-group">
          {videoItems}
        </ul>
    )
}

export default VideoItemList