const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./config/database");

const appRoutes = require("./routes/app");
const user = require("./routes/user");
const passport = require("passport");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Auth stuff
app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

// Database connection
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// On connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database" + config.database);
});

// On Error
mongoose.connection.on("error", (err) => {
  console.log("Database error:" + err);
});

//CROS-ORIGIN-RESOURCE-SHARING (CORS)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PATCH, DELETE, OPTIONS"
  );
  next();
});

// Passport Middleware
// This module lets you authenticate endpoints using json web token.
// It is intended to be used to secure Restful endpoits without sessions.
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

// Routes setup
app.use("/", appRoutes);
app.use("/user", user);

module.exports = app;
