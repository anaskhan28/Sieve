'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SideVideoList from './SideVideoList';
import './playlist-video.css';
import Navbar from '@/app/Homepage/Navbar/Navbar';

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

export const VideoPlayer = ({ videoId, videoTitle }) => {
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <>
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
            <PlaylistRating />
        </>
    );
};

const VideoList = ({ videos }) => {
    console.log(videos);
    const [index, setIndex] = useState(0)

    return (
        <div className='yt-video-main'>
            <div className='video-div'>
                {videos ? <VideoPlayer className="video-play" key={index} videoId={videos[index]?.videoId} videoTitle={videos[index]?.videoTitle} /> : ""}
            </div>
            <div className='sidebar-playlist'>
                {videos.length <= 0 ? '' : <SideVideoList videos={videos} setIndex={setIndex} />}
            </div>
        </div>
    );
};

const Page = ({ params: { playListID } }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const playlistId = playListID;
                const apiKey = 'AIzaSyCMXYHm-mIW4h7A2863ujzkizWVO3R81MI';
                const data = await getYouTubePlaylistInfo(playlistId, apiKey);
                setVideos(data);
                console.log(data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Navbar />
            <div className='video-main'>
                <VideoList videos={videos} />
            </div>
        </>
    );
};

export default Page;


