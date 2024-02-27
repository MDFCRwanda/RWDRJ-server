const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./routes/authRouter");
const blogRouter = require("./routes/blogRouter");
const eventsRouter = require("./routes/eventRouter");
const newsRouter = require("./routes/newsRouter");
const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "300mb" }));
app.use(express.urlencoded({ limit: "300mb" }));
app.use(cors({ origin: "*" }));
app.options("*", cors());

app.use("/", authRouter);
app.use("/blogs", blogRouter);
app.use("/events", eventsRouter);
app.use("/news", newsRouter);

module.exports = app;
