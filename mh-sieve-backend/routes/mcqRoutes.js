import express from 'express'
import { GenerateMCQ } from '../controllers/mcqController.js'

let mcqRoute = (app) => {
    router.post('/generateMCQ',GenerateMCQ)
    return app.use('/', router)
}

export default mcqRoute

let router = express.Router()