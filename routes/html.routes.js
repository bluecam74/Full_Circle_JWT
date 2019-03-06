var db = require("../models");
var express = require("express");
var router = express.Router();


  // Load index page
  router.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load FAQ
  router.get("/faq", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("faq", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Create account
  router.get("/create_account", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("create", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Profile
  router.get("/profile", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("profile", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Past Transactions
  router.get("/transactions", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("transactions", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  router.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  router.get("*", function (req, res) {
    res.render("404");
  });


module.exports = router;