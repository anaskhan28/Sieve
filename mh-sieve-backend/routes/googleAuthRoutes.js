import passport from 'passport';
import initPassportGoogle from '../controllers/googleOauth.js'
initPassportGoogle()
import express from 'express'
import { checkLog } from '../controllers/loginController.js';

let googleAuthRoutes = (app) => {

    app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login/failed' }),
        function (req, res) {
            res.redirect(process.env.CLIENT_NAME_FRONTEND);
        });

    app.get('/login/failed', (req, res) => {
        res.send('login failed')
    })

    app.post('/checkLog',checkLog)
    return app.use('/', router)
}

// module.exports = googleAuthRoutes
export default googleAuthRoutes
// export default router

let router = express.Router()