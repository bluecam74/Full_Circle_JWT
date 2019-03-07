require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var jwt = require('express-jwt');
var cookieParser = require("cookie-parser")

var auth = jwt({
  secret: process.env.JWT_SECRET,
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.cookies.token) {
      return req.cookies.token;
    }
    return null;
  }
});
var db = require("./models");
var authRoutes = require("./routes/auth.routes");
var apiRoutes = require("./routes/api.routes");
var htmlRoutes = require("./routes/html.routes");
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes

app.use("/auth", authRoutes);
// app.use(auth);
app.use("/api", apiRoutes);
app.use(htmlRoutes);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
