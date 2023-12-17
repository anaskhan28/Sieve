import express from 'express'
import { playlistRating } from '../controllers/ratingController.js'

let ratingRoute = (app) => {
    router.post('/playlistRating',playlistRating)
    return app.use('/', router)
}

export default ratingRoute

let router = express.Router()