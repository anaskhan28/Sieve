'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

async function getYouTubePlaylistInfo(playlistId, apiKey) {
    try {
        const apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems';
        const response = await axios.get(apiUrl, {
            params: {
                part: 'snippet',
                playlistId: playlistId,
                key: apiKey,
                maxResults: 10,
            },
        });

        const playlistInfo = response.data.items.map(item => {
            return {
                videoTitle: item.snippet.title,
                videoId: item.snippet.resourceId.videoId,
                videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
                videoThumbnail: item.snippet.thumbnails.high.url,
                videoDescription: item.snippet.description,
                VideoPublishedAt: item.snippet.publishedAt,
                VideoChannelId: item.snippet.channelId,
                VideoChannelTitle: item.snippet.channelTitle,
                videolang: item.snippet.defaultAudioLanguage,
            };
        });

        return playlistInfo;
    } catch (error) {
        console.error('Error fetching YouTube playlist information:', error.message);
        throw error;
    }
}

const VideoPlayer = ({ videoId, videoTitle }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <h2>{videoTitle}</h2>
            <iframe
                title={videoTitle}
                width="560"
                height="315"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

const VideoList = ({ videos }) => {
    return (
        <div>
            {videos.map((video, index) => (
                <VideoPlayer key={index} videoId={video.videoId} videoTitle={video.videoTitle} />
            ))}
        </div>
    );
};


const page = ({ params: { playListID } }) => {
    const [videos, setVideos] = useState([])
    //PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG
    //https://youtube.com/playlist?list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG&si=_P0RtWTiR752xsnD

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playlistId = playListID;
                const apiKey = 'AIzaSyCMXYHm-mIW4h7A2863ujzkizWVO3R81MI';
                const data = await getYouTubePlaylistInfo(playlistId, apiKey);
                setVideos(data);
                console.log(data)
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <h1>YouTube Video Playlist</h1>
            <VideoList videos={videos} />
        </div>
    )
}

export default page
