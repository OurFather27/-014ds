const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const cors = require("cors");
const bodyparser = require('body-parser');
const { MONGO_URL, port } = require("./.env");
const cookieParser = require('cookie-parser')
// speacfice Routing 
const EventRoute = require("./routes/Event")
const ContactRoute = require("./routes/Contact")
const AboutRoute = require("./routes/About")
const AuthRoute = require("./routes/Auth")
const GroupRoute = require("./routes/Group")
const LocationRoute = require("./routes/Location")
const MessageRoute = require("./routes/Message")
const UserRoute = require("./routes/User")
const TeleApiRoute = require("./routes/TeleApi")


dotenv.config();
mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connected Database");
  })
  .catch((e) => {
    console.log(e);
  });

app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


//middleware
app.use(cors({
  origin:["http://localhost:5173"],
  method: ["GET", "POST"],
  credentials: true
  }));
app.use(cookieParser())
app.use(express.json());
app.use(helmet());
app.use(router);
app.use(morgan("common"));
app.use(bodyparser.json());

// image uploading
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});
app.put("/api/upload/:_id", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});
app.get("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
  }
});


app.get("/",(req, res)=>{
    res.json(" server start")
})

app.use("/api/events", EventRoute);
app.use("/api/abouts", AboutRoute);
app.use("/api/auths", AuthRoute);
app.use("/api/groups", GroupRoute);
app.use("/api/contacts", ContactRoute);
app.use("/api/locations", LocationRoute);
app.use("/api/messages", MessageRoute);
app.use("/api/users", UserRoute);
app.use("/api/teleApi", TeleApiRoute);


app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
