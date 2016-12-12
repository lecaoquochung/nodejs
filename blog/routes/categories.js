var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/nodeblog');

router.get('/add', function(req, res, next) {
	res.render('category',{
  		'title': 'Add Category'
	});
});

router.post('/add', function(req, res, next) {
  // Get Form Values
  var name = req.body.name;

  	// Form Validation
	req.checkBody('name','Name field is required').notEmpty();

	// Check Errors
	var errors = req.validationErrors();

	if(errors) {
        // Alert error
		res.render('addpost', {
			"errors": errors
		});
	} else {
        // Save to db
		var categories = db.get('categories');
		categories.insert({
			"name": name,
		}, function(err, post){
			if(err) {
				res.send(err);
			} else {
				req.flash('success','Category Added');
				res.location('/');
				res.redirect('/');
			}
		});
	}
});

module.exports = router;
