'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

async function getRandomYouTubePlaylists(apiKey, playlistIds) {
    try {
        const playlists = [];

        for (const playlistId of playlistIds) {
            const playlistInfo = await getYouTubePlaylistInfo(playlistId, apiKey);
            playlists.push(playlistInfo);
        }

        return playlists;
    } catch (error) {
        console.error('Error fetching YouTube playlists:', error.message);
        throw error;
    }
}

// const PlaylistCard = ({ playlist }) => {
//     return (
//         <div>
//             <h2>{playlist.playlistTitle}</h2>
//             <p>{playlist.playlistDescription}</p>
//             <img src={playlist.playlistThumbnail} alt={playlist.playlistTitle} />
//             <VideoList videos={playlist.videos} />
//         </div>
//     );
// };


async function getYouTubePlaylistInfo(playlistId, apiKey) {
    try {
        const playlistResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlists', {
            params: {
                part: 'snippet',
                key: apiKey,
                id: playlistId,
                maxResults: 1, // You can adjust this if needed
            },
        });

        const playlistItemResponse = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
            params: {
                part: 'snippet',
                playlistId: playlistId,
                key: apiKey,
                maxResults: 10, // You can adjust this if needed
            },
        });

        const playlist = playlistResponse.data.items[0];
        const videos = playlistItemResponse.data.items.map(item => ({
            videoTitle: item.snippet.title,
            videoId: item.snippet.resourceId.videoId,
            videoUrl: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
            videoThumbnail: item.snippet.thumbnails.high.url,
            videoDescription: item.snippet.description,
            VideoPublishedAt: item.snippet.publishedAt,
            VideoChannelId: item.snippet.channelId,
            VideoChannelTitle: item.snippet.channelTitle,
            videolang: item.snippet.defaultAudioLanguage,
        }));

        return {
            playlistId: playlist.id,
            playlistTitle: playlist.snippet.title,
            playlistDescription: playlist.snippet.description,
            playlistThumbnail: playlist.snippet.thumbnails.high.url,
            playlistPublishedAt: playlist.snippet.publishedAt,
            playlistChannelId: playlist.snippet.channelId,
            playlistChannelTitle: playlist.snippet.channelTitle,
            videos: videos,
        };
    } catch (error) {
        console.error('Error fetching YouTube playlist information:', error.message);
        throw error;
    }
}

const PlaylistCard = ({ playlist }) => {
    const router = useRouter()
    const goToPlayListPage = () => {
        router.push('/playlist/' + playlist.playlistId)
    }
    return (
        <div onClick={goToPlayListPage}>
            <h2>{playlist.playlistTitle}</h2>
            <p>{playlist.playlistDescription}</p>
            <img src={playlist.playlistThumbnail} alt={playlist.playlistTitle} />
        </div>
    );
};


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

const PlaylistList = ({ playlists }) => {
    return (
        <div>
            {playlists.map((playlist, index) => (
                <PlaylistCard key={index} playlist={playlist} />
            ))}
        </div>
    );
};

const Page = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = 'AIzaSyCMXYHm-mIW4h7A2863ujzkizWVO3R81MI';
                const playlistIds = [
                    'PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8',
                    'PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
                    'PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7',
                    'PLhzIaPMgkbxDK0XplEg2SdbZu-yz3B_T-',
                    'PLmRclvVt5DtnqhXTJwd-oqVRwO3bLZCGV',
                    'PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD',
                    'PLW-zSkCnZ-gBtmXf9AfRbA90GnBv7o2gS'
                ];
                const data = await getRandomYouTubePlaylists(apiKey, playlistIds);
                setPlaylists(data);
                console.log(data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Random YouTube Playlists</h1>
            <PlaylistList playlists={playlists} />
        </div>
    );
};


export default Page;
