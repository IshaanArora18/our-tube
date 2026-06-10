import React from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux';
const VideoContainer = () => {
  const filteredVideos = useSelector((store)=>store.videos.filteredVideos);
  if(!filteredVideos)return null;
  return (
    <div className="flex flex-wrap">
      {filteredVideos?.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  )
}

export default VideoContainer