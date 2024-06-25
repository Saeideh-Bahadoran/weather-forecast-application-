const express = require("express");
const PORT = 5005;
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

const weatherRoutes = require("./routes/weather.routes")
app.use("/api",weatherRoutes)
module.exports = app;
