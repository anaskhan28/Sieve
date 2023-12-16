import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImg") {
      cb(null, "./public/uploads/profileImg");
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname +
        "-" +
        Date.now() +
        Math.floor(Math.random() * 90000) +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage }).fields([
  {
    name: "profileImg",
  },
]);

export default upload;
