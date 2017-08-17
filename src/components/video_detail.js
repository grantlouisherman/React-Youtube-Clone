import React from 'react';

export default ({video}) => {
    if(!video){
        return <div>Loading.....</div>
    }
    const snippet = video.snippet;
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{snippet.titel}</div>
                <div>{snippet.description}</div>
            </div>
        </div>
    )
}