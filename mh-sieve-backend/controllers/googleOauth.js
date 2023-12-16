// var GoogleStrategy = require('passport-google-oauth20').Strategy;
import passport from 'passport';
import GS from 'passport-google-oauth20'
import { User } from '../models/User.js'
const GoogleStrategy = GS.Strategy
// require('dotenv').config();
import dotenv from 'dotenv'
dotenv.config()

const initPassportGoogle = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: 'http://localhost:8000/auth/google/callback',
            },
            async function (accessToken, refreshToken, profile, cb) {
                // return console.log(profile)
                try {
                    // Find the user by googleId
                    let user = await User.findOne({ googleId: profile.id });

                    // If the user doesn't exist, create a new user
                    if (!user) {
                        user = new User({
                            googleId: profile.id,
                            // Add other properties as needed
                        });
                        await user.save();
                    }

                    return cb(null, user);
                } catch (error) {
                    return cb(error, null);
                }
            }
        )
    );
};

passport.deserializeUser((googleId, done) => {
    User.findOne({ googleId })
        .then((user) => {
            console.log('deserialized')
            done(null, user);
        })
        .catch((err) => {
            done(err, null);
        });
});

passport.serializeUser((user, done) => {
    console.log('serialize', user);
    console.log('heh');

    if (!user) {
        return done(new Error('Invalid user object for serialization'));
    }
    console.log('serialized')
    done(null, user.googleId);
});


// passport.deserializeUser((id, done) => {
//     console.log('-----------------------')
//     console.log(id)
//     User.findOne({ googleId: id })
//         .then((user) => {
//             done(null, user);
//         })
//         .catch((err) => {
//             done(err, null);
//         });
// });

// passport.serializeUser((user, done) => {
//     console.log('serialize', user);
//     console.log('heh')

//     if (!user) {
//         return done(new Error('Invalid user object for serialization'));
//     }

//     done(null, user.googleId);
// });

// passport.deserializeUser((data, done) => {
//     console.log(data)
//     console.log('deserialized')
//     const id = data.id;
//     const role = data.role;
//     console.log(data)
//     console.log(role)
//     console.log(id)
//     let findFunction = null;

//     switch (role) {
//         case 'user':
//             findFunction = loginService.findUserById('user', id);
//             break;
//         case 'admin':
//             findFunction = loginService.findUserById('admin', id);
//             break;
//         case 'sub-admin':
//             findFunction = loginService.findUserById('sub-admin', id);
//             break;
//         default:
//             break;
//     }

//     if (findFunction) {
//         findFunction
//             .then((user) => {
//                 if (user) {
//                     return done(null, user);
//                 } else {
//                     return done(new Error('User not found'), null);
//                 }
//             })
//             .catch((error) => {
//                 return done(error, null);
//             });
//     } else {
//         return done(new Error('Invalid role'), null);
//     }

// });


passport.serializeUser((user, done) => {
    console.log('serialize', user);
    console.log('heh')

    if (!user) {
        return done(new Error('Invalid user object for serialization'));
    }
    if (user.id === undefined) {
        done(null, { id: user.google_id, role: 'user' });
    } else {
        done(null, { id: user.id, role: user.role });
    }

});




// module.exports = initPassportGoogle;
export default initPassportGoogle
