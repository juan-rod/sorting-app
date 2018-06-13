const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const morgan = require("morgan");

//load user model
require("./models/User");

//passport config
require("./config/passport")(passport);

//load routes
const auth = require("./routes/auth");
//load keys
const keys = require("./config/keys");

//Mongoose Connect
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

const app = express();

//morgan middleware
app.use(morgan("combined"));
// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "html");

//cors
app.use(cors());

app.get("/", (req, res) => {
  res.render("http://localhost:8080/home");
  // res.send("I'm the sorting app!");
});

app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

//passport
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//use routes
app.use("/auth", auth);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
