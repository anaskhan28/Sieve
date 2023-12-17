// app.get('/playlist/:id', (req, res) => {
//     console.log('hello')
// const playlistId = req.params.id;
// const playlist = playlists[playlistId];

// if (!playlist) {
//   return res.status(404).json({ error: 'Playlist not found' });
// }

// res.json({ rating: playlist.rating });
// });

// Endpoint to rate a playlist
// app.post('/playlist/:id/rate', (req, res) => {
//     console.log('hello')
// const playlistId = req.params.id;
// const { rating } = req.body;

// // Validate rating
// if (!rating || isNaN(rating) || rating < 1 || rating > 10) {
//   return res.status(400).json({ error: 'Invalid rating' });
// }

// // Create or update playlist rating
// if (!playlists[playlistId]) {
//   playlists[playlistId] = { rating, totalRatings: 1 };
// } else {
//   playlists[playlistId].rating =
//     (playlists[playlistId].rating * playlists[playlistId].totalRatings + rating) /
//     (playlists[playlistId].totalRatings + 1);
//   playlists[playlistId].totalRatings++;
// }

// res.json({ success: true });
// });

export const playlistRating = async (req, res) => {
    try {
        console.log('hello')
        console.log(req.body)
        const { videoDescription } = req.body;
        console.log(videoDescription);
        // ... rest of your code
    } catch (error) {
        console.error('Error processing playlist rating:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


