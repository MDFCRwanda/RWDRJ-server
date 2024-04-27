const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRouter = require("./routes/authRouter");
const blogRouter = require("./routes/blogRouter");
const eventsRouter = require("./routes/eventRouter");
const newsRouter = require("./routes/newsRouter");
const siteInfoRouter = require("./routes/siteInfoRoutes");
const aboutusRouter = require("./routes/aboutUsPageRouter");
const contactusRouter = require("./routes/contactUsPageRouter");
const compaignRouter = require("./routes/compaignPageRouter");
const advocacyRouter = require("./routes/advocacyPageRouter");
const trainingRouter = require("./routes/trainingPageRouter");
const digitalInfoRouter = require("./routes/digitalRouter");
const partnerRouter = require("./routes/partnerRouter");
const teamMemberRouter = require("./routes/teamMemberRouter");
const ourTeamPageRouter = require("./routes/ourTeamPageRouter");
const pagesRouter = require("./routes/pagesRouter");
const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "300mb" }));
app.use(express.urlencoded({ limit: "300mb" }));
app.use(cors({ origin: "*" }));
app.options("*", cors());

app.use("/", siteInfoRouter);
app.use("/aboutus", aboutusRouter);
app.use("/contactus", contactusRouter);
app.use("/compaign", compaignRouter);
app.use("/training", trainingRouter);
app.use("/advocacy", advocacyRouter);
app.use("/ourteam", ourTeamPageRouter);
app.use("/partners", partnerRouter);
app.use("/teammembers", teamMemberRouter);
app.use("/digitalhealth", digitalInfoRouter);

app.use("/admin", authRouter);
app.use("/pages", pagesRouter);
app.use("/blogs", blogRouter);
app.use("/events", eventsRouter);
app.use("/news", newsRouter);

module.exports = app;
