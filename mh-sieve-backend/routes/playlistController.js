import express from 'express';
import {
    addComment,
    createPlaylist,
    getAllPlaylists,
    getSinglePlaylist
} from '../controllers/playlistController.js';
const Router = express.Router();



Router
    .route("/")
    .get(getAllPlaylists)
    .post(createPlaylist)

Router
    .route("/:id/comments")
    .put(addComment);

Router
    .route("/:id")
    .get(getSinglePlaylist)

export default Router;