import React from 'react'

const VideoItemList = (props) => {
    return (
        <ul className="col-md-4 list-group">
          {props.videos.length}
        </ul>
    )
}

export default VideoItemList