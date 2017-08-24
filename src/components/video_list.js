import VideoListItem from './video_list_item';
import React, {Component} from 'react';

export default ({videos, onVideoSelect}) => {
    

    return (
        <ul className="col-md-4 list-group">
            {
            videos.map( video => {
                return (
                    <VideoListItem 
                            video={video} 
                            key={video.etag}
                            onVideoSelect ={onVideoSelect}   
                     />  
                    )
               
                })
            }
        </ul>
    )
}