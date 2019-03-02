var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load FAQ
  app.get("/faq", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("faq", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Create account
  app.get("/create_account", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("create", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Profile
  app.get("/profile", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("profile", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Past Transactions
  app.get("/transactions", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("transactions", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
