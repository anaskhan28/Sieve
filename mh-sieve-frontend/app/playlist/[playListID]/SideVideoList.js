'use client'
import React from 'react'
import { VideoPlayer } from './page'
import './playlist-video.css';

const SideVideoList = ({ videos, setIndex }) => {
    const handlePlayVideo = (index) => {
        setIndex(index)
    }
    return (
        <div className='sidebar-playlist-main'>
            <h2>Next Videos</h2>
            {videos?.map((video, index) => (
                // <VideoPlayer key={index} videoId={video.videoId} videoTitle={video.videoTitle} />
                <div onClick={() => handlePlayVideo(index)} className='next-video-link'>
                    <div className='video-title'> {video.videoTitle}  </div>
                </div>
            ))}
        </div>
    )
}

export default SideVideoList
