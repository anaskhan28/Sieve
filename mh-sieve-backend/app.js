import express from "express";
// import cookieParser from "cookie-parser";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import rfs from "rotating-file-stream";
import ErrorMiddleware from "./middleWares/Error.js";
import MongoStore from "connect-mongo";
import passport from "passport";
import morgan from "morgan";
import expressSanitizer from "express-sanitizer";
import { config } from "dotenv";
// import googleAuthRoutes from './routes/googleAuthRoutes.js'
import googleAuthRoutes from './routes/googleAuthRoutes.js'


config({ path: "./config/config.env" });

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// importing middleWares

const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// app.use(cookieParser());
// app.use(flash());

app.use(
  session({
    saveUninitialized: false,
    resave: false,
    key: process.env.KEY,
    secret: process.env.SECRET,
    secure: true,
    httpOnly: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_LOCAL_URI,
      ttl: 7 * 24 * 60 * 60,
      autoRemove: "native",
      collectionName: "sessions",
      touchAfter: 12 * 3600,
    }),
    cookie: {
      maxAge: 50 * 365 * 24 * 60 * 60 * 1000,
    },
  })
);

// Create a rotating write stream
let accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "logs"),
});

app.use("/api", express.json());
app.use("/api", express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));
app.use(passport.initialize());
app.use(passport.session())
// app.use(flash());
app.use(expressSanitizer());
app.use(morgan("combined", { stream: accessLogStream }));

// app.use(function (req, res, next) {
//   res.locals.currentUser = req.user || null;
//   res.locals.username = req.user ? req.user.username
//       : req.user.createdBy.username
//     : null;
//   next();
// });
// app.use(function (req, res, next) {
//   res.locals.currentUser = req.user || null;
//   res.locals.username = req.user
//     ? req.user.username
//     : req.user && req.user.createdBy
//       ? req.user.createdBy.username
//       : null;
//   next();
// });

// app.use('/',googleAuthRoutes)

// User route imports
// import googleOauth from "./routes/user/googleAuthRoutes.js";
// app.use("/api/user/auth", googleOauth);
googleAuthRoutes(app)

// playlist route imports
import playlistRoutes from "./routes/playlistRoutes.js";
app.use("/api/playlists", playlistRoutes);

// Admin Routes
// import adminPrimaryRoutes from "./routes/admin/primaryRoute.js";
// app.use("/api/admin/", adminPrimaryRoutes);

// // util routes
// import utilsRoute from './routes/user/utilsRoute.js';
// app.use("/api/utils/", utilsRoute);

// // class routes
// import classRoute from './routes/class/primaryRoute.js';
// app.use("/api/class/", classRoute);

// // question routes
// import questionRoute from './routes/class/questionRoute.js';
// app.use("/api/question/", questionRoute);

// // report routes
// import reportRoute from './routes/class/reportRoute.js';
// app.use("/api/report/", reportRoute);

// // test routes
// import testRoute from './routes/class/testRoute.js';
// import { getFileStream } from "./config/storageObject.js";
// app.use("/api/test/", testRoute);

// // Teacher route imports
// import teacherRoutes from "./routes/teacher/primaryRoute.js";
// app.use("/api/teacher/", teacherRoutes);
//
// // Student route imports
// import studentRoutes from "./routes/student/primaryRoute.js";
// app.use("/api/student",studentRoutes);

// test route
app.get("/status", (req, res) => {
  // res.render("test");
  res.status(200).send("Server is up & running...")
})

app.use(ErrorMiddleware);
export default app; 
