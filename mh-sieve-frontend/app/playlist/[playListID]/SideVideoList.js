'use client'
import React from 'react'
import { VideoPlayer } from './page'

const SideVideoList = ({ videos, setIndex }) => {
    const handlePlayVideo = (index) => {
        setIndex(index)
    }
    return (
        <div>
            {videos?.map((video, index) => (
                // <VideoPlayer key={index} videoId={video.videoId} videoTitle={video.videoTitle} />
                <div onClick={() => handlePlayVideo(index)}>
                    <h1> {video.videoTitle}  </h1>
                </div>
            ))}
        </div>
    )
}

export default SideVideoList
