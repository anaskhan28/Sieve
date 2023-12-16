import {catchAsyncError} from '../middlewares/catchAsyncError.js';
import {Playlist} from '../models/Playlist.js';

// @desc    Create a new playlist
// @route   POST /api/playlists
// @access  Public
export const createPlaylist = catchAsyncError(async (req, res) => {
    const { playlistLink } = req.body; 
    
    const existingPlaylist = await Playlist.findOne({ link: playlistLink });
    if (existingPlaylist) {
        return res.status(400).json({
            success: false,
            message: 'Playlist with the given link already exists',
        });
    }
    
    const playlist = await Playlist.create({ link: playlistLink });

    res.status(201).json({
        success: true,
        data: playlist,
    });
});

// @desc    Get all playlists
// @route   GET /api/playlists
// @access  Public
export const getAllPlaylists = catchAsyncError(async (req, res) => {
    let query = {};

    let limit = parseInt(req.query.perPage) || 10;
    let page = parseInt(req.query.page, 10) || 1;
    let skip = (page - 1) * limit;
    let sort = req.query.sort ? {} : { number: -1 };
    let search = req.query.search;
    let isComments = req.query.isComments == 'true' ? true : false;

    if (search) {
      let newSearchQuery = search.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      const regex = new RegExp(newSearchQuery, "gi");
      query.$or = [
        {
          name: regex,
        },
        {
          description: regex,
        },
        {
          rating: regex,
        },
      ];
    }

    let aggregateQuery = [
        {
            $match: query,
        },
        {
            $sort: sort,
        },
        {
            $facet: {
                data: [
                    { $skip: skip },
                    { $limit: limit },
                ],
                metadata: [
                    { $count: "total" },
                ],
            },
        },
    ];

    if (isComments) {
        aggregateQuery[0].$lookup = {
            from: "comments",
            localField: "_id",
            foreignField: "playlist",
            as: "comments",
        };
    }
    // console.log(query);

    const playlists = await Playlist.aggregate(aggregateQuery);
    const totalPlaylists = playlists[0].metadata[0] ? playlists[0].metadata[0].total : 0;
    const totalPages = Math.ceil(totalPlaylists / limit);

    res.status(200).json({
      playlists: playlists[0].data,
      total: totalPages,
      page,
      perPage: limit,
      search: search ? search : "",
    })

});

// @desc    Get a single playlist by ID
// @route   GET /api/playlists/:id
// @access  Public
export const getSinglePlaylist = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const playlist = await Playlist.findById(id).populate('comments videos');

    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }

    res.status(200).json({ playlist });
});

// @desc    Add a comment to a playlist
// @route   PUT /api/playlists/:id/comments
// @access  Public
export const addComment = catchAsyncError(async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    const userId = req.user._id;

    const playlist = await Playlist.findById(id);

    if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
    }

    const existingComment = playlist.comments.find(c => c.userId === userId);

    if (existingComment) {
        return res.status(400).json({ error: 'User already commented on this playlist' });
    }

    playlist.comments.push({ userId, comment });
    await playlist.save();

    res.status(200).json({ message: 'Comment added successfully' });
});
