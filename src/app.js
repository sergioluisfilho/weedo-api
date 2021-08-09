const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
const routes = require("./routes");
app.use(routes);

module.exports = app;
