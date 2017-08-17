import React, {Component} from 'react';

export default function({video, key, onVideoSelect}){

    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick = { () => onVideoSelect(video) }  key={key} className="list-group-item">
            <div className="video-list media">
                <div>
                    <div className="media-left">
                        <img src = {imageUrl} className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-header">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </div>
        </li>

    )
}