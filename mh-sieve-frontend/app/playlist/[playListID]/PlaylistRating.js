'use client'
import React from 'react'
import axios from 'axios'
const PlaylistRating = () => {
    const handleRating = async() => {
        const res = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_NAME}/playlistRating`,
            { videoDescription: "hello" },
            { withCredentials: true, headers: { "Content-Type": "application/json" } }
          );
          console.log(res.data)
    }
    return (
        <div>
            <button onClick={handleRating}>rate</button>
        </div>
    )
}

export default PlaylistRating
