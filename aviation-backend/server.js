const { response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();
const { hataYakalama } = require("./middlewares/errorMiddleware");
const baglan = require("./config/db");
const PORT = process.env.PORT;
const app = express();
const cors = require("cors");

const FileRoutes = require("./routes/CvRoute");

//
const path = require("path");
//
app.use(cors());
app.use(express.urlencoded({ extended: false, limit: "20mb" }));
app.use(express.json());

//

app.use("/api/jobs", require("./routes/notRoute"));
app.use("/api/user", require("./routes/kullaniciRoute"));
app.use("/api/subscribe", require("./routes/SubscribeRoute"));
// app.use("/api/upload", require("./routes/cvroute"));
app.use("/upload", express.static(path.join(__dirname, "/upload")));
app.use("/api2", FileRoutes);

//

app.use(hataYakalama);
baglan();
app.listen(PORT, () => console.log(`Server ${PORT} online`));
