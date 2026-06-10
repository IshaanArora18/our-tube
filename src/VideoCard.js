import React from 'react'
import { Link } from "react-router";

const VideoCard = ({ video }) => {
  return (
    <div className="m-2 p-2 w-80 shadow-lg">
      <Link to={`/watch?v=${video.id}`}>
        <img alt="thumbnail" src={video.snippet.thumbnails.medium.url} className="rounded-lg"/>
      </Link>
      <h3 className="font-bold">{video.snippet.title}</h3>
      <p>{video.snippet.channelTitle}</p>
    </div>
  )
}

export default VideoCard