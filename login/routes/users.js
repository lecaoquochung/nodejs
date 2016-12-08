"use strict"

var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({dest: "./uploads"});

// Model
var User = require("../models/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", function(req, res, next) {
  res.render("register",{title:"Register"});
});

router.get("/login", function(req, res, next) {
  res.render("login", {title:"Login"});
});

router.post("/register", upload.single("profileimage") ,function(req, res, next) {
  console.log(req.body.name);
  // STEP 01 Init variable from request
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  // file upload
  if(req.file) {
    console.log("Uploading File...");
    var profileimage = req.file.filename;
  } else {
    console.log("No file uploaded");
    var profileimage = 'noimage.jpg';
  }

  // STEP 02 validation request data
  req.checkBody("name", "Name field is required").notEmpty();
  req.checkBody("email", "Email field is required").notEmpty();
  req.checkBody("email", "Email is not valid").isEmail();
  req.checkBody("username", "Username field is required").notEmpty();
  req.checkBody("password", "Password field is required").notEmpty();
  req.checkBody("password2", "Password do not match").equals(req.body.password);

  var errors = req.validationErrors();

  // STEP 3 alert message
  if(errors) {
    res.render("register", {
      errors: errors
    });
  } else {
    // STEP 4 write to db
    console.log("Writing to db");

    // register new user
    var newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password,
      profileimage: profileimage
    }); 

    User.createUser(newUser, function(err, user) {
      if(err) throw err;
      console.log(user);
    });

    res.location("/");
    res.redirect("/");
  }

});

module.exports = router;
