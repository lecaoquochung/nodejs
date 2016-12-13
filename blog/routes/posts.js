"use strict"

var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: './public/images' })
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');

router.get('/add', function(req, res, next) {

    // res.render('addpost',{
    //     'title': 'Add Post'
    // });

	var categories = db.get('categories');
	// TODO
    // console.log("/////////// categories: " + JSON.stringify(categories));

    // TODO monk find();
    // https://automattic.github.io/monk/docs/collection/find.html
	categories.find({},{},function(err, categories){
		res.render('addpost',{
  			'title': 'Add Post',
  			'categories': categories
  		});
	});
});

router.post('/add', upload.single('mainimage'), function(req, res, next) {
  // Get Form Values
  var title = req.body.title;
  var category= req.body.category;
  var body = req.body.body;
  var author = req.body.author;
  var date = new Date();

  // test
  console.log("/////////// title: " + title);
  console.log("/////////// category: " + category);
  console.log("/////////// body: " + body);
  console.log("/////////// author: " + author);
  console.log("/////////// date: " + date);

  // Check Image Upload
  if(req.file) {
  	var mainimage = req.file.filename;
  } else {
  	var mainimage = 'noimage.jpg';
  }

  // Form Validation
  req.checkBody('title','Title field is required').notEmpty();
  req.checkBody('body', 'Body field is required').notEmpty();

  // Check Errors
  var errors = req.validationErrors();
  console.log("/////////// errors: " + JSON.stringify(errors));

  if(errors) {
	res.render('addpost',{
		"errors": errors
	});
  } else {
	var posts = db.get('posts');
	posts.insert({
		"title": title,
		"body": body,
		"category": category,
		"date": date,
		"author": author,
		"mainimage": mainimage
	}, function(err, post) {
		if(err) {
			res.send(err);
		} else {
			req.flash('success','Post Added');
			res.location('/');
			res.redirect('/');
		}
	});
  }
});

module.exports = router;
