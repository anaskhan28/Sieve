'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

async function getRandomYouTubePlaylists(apiKey, maxResults = 50) {
    try {
        const apiUrl = 'https://www.googleapis.com/youtube/v3/playlists';
        const response = await axios.get(apiUrl, {
            params: {
                // part: 'snippet',  // Uncomment this line
                // regionCode: 'US',
                key: apiKey,
                maxResults: 50,
            },
        });

        const playlists = response.data.items.map(item => {
            return {
                playlistId: item.id,
                playlistTitle: item.snippet.title,
                playlistDescription: item.snippet.description,
                playlistThumbnail: item.snippet.thumbnails.high.url,
                playlistPublishedAt: item.snippet.publishedAt,
                playlistChannelId: item.snippet.channelId,
                playlistChannelTitle: item.snippet.channelTitle,
            };
        });

        return playlists;
    } catch (error) {
        console.error('Error fetching YouTube playlists:', error.message);
        throw error;
    }
}

const PlaylistCard = ({ playlist }) => {
    return (
        <div>
            <h2>{playlist.playlistTitle}</h2>
            <p>{playlist.playlistDescription}</p>
            <img src={playlist.playlistThumbnail} alt={playlist.playlistTitle} />
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
                const data = await getRandomYouTubePlaylists(apiKey, 50);
                setPlaylists(data);
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
