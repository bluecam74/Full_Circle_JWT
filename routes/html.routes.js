var db = require("../models");
var express = require("express");
var router = express.Router();


  // Load index page
  router.get("/", function (req, res) {
    //db.User.findAll({}).then(function (fullcircle_db) {
      res.render("index", {
        msg: "Welcome!",
        //examples: fullcircle_db
      });
    });
 // });

  // Load FAQ
  router.get("/faq", function (req, res) {
    db.User.findAll({}).then(function (fullcircle_db) {
      res.render("faq", {
        msg: "Welcome!",
        examples: fullcircle_db
      });
    });
  });

  // Create account
  router.get("/create_account", function (req, res) {
    db.Example.findAll({}).then(function (fullcircle_db) {
      res.render("create", {
        msg: "Welcome!",
        examples: fullcircle_db
      });
    });
  });

  // Profile
  router.get("/profile", function (req, res) {
    db.Example.findAll({}).then(function (fullcircle_db) {
      res.render("profile", {
        msg: "Welcome!",
        examples: fullcircle_db
      });
    });
  });

  // Past Transactions
  router.get("/transactions", function (req, res) {
    db.Pending.findAll({})
    .then(function (fullcircle_db) {
      var hbsObject = {Pending: fullcircle_db};
      console.log(hbsObject);

      res.render("transactions", hbsObject);
    });
  });

  router.get("/kiosk", function (req, res) {
    db.Pending.findAll({})
    .then(function (fullcircle_db) {
      var hbsObject = {Pending: fullcircle_db};
      console.log(hbsObject);

      res.render("kiosk", hbsObject);
    });
  });

  

  // Render 404 page for any unmatched routes
  router.get("*", function (req, res) {
    res.render("404");
  });


module.exports = router;