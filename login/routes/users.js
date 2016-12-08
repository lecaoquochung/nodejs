"use strict"

var express = require("express");
var router = express.Router();
var multer = require("multer");
var upload = multer({dest: "./uploads"});
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

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

router.post("/login", 
  passport.authenticate("local", {failureRedirect:"/users/login", failureFlash: "Invalid username or password"}),
  function(req, res) {
    req.flash("success", "You are now loggeg in");
    res.redirect('/');
  // res.redirect("/users" + req.user.username);
  }
);
  
// Passport login sesssion
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// Passport extra function
passport.use(new LocalStrategy(function(username, password, done) {
  // check user name
  User.getUserByUsername(username, function(err, user) {
    if(err) throw err;
    if(!user) {
      return done(null, false, { message: 'Unknown User' });
    }

    // compare password
    User.comparePassword(password, user.password, function(err, isMatch) {
      if(err) return done(err);
      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message:'Invalid Password' });
      }
    });
  });
}));

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

    req.flash("success", "You are now registered and can login");

    res.location("/");
    res.redirect("/");
  }

});

module.exports = router;
