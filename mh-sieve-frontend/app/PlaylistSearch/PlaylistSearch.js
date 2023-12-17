import React from 'react'
import './playlist.css'

function PlaylistSearch() {
    return (
        <div className='playlist-search-master'>
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
        </div>
    )
}

export default PlaylistSearch