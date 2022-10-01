const { response } = require("express");
const express = require("express");
const dotenv = require("dotenv").config();

const { hataYakalama } = require("./middlewares/errorMiddleware");
const baglan = require("./config/db");

const PORT = process.env.PORT;

const app = express();

const cors = require("cors");

app.use(cors()); //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/jobs", require("./routes/notRoute"));
app.use("/api/user", require("./routes/kullaniciRoute"));
app.use("/api/subscribe", require("./routes/"));

//

app.use(hataYakalama);

baglan();

app.listen(PORT, () => console.log(`Server ${PORT} online`));
