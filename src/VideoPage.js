import React from 'react'

const VideoPage = () => {
    const queryParams = new URLSearchParams(window.location.search);
    
    return (
        <div>
            <div className="w-3/4 h-1/2 py-8 px-4">
            <iframe className="rounded-lg" width="100%" height="500px" src={`https://www.youtube.com/embed/${queryParams.get('v')}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default VideoPage