"use strict";

require("app-module-path").addPath(__dirname);

var express = require('express');
var Promise = require("bluebird");
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var sgTransport = require("nodemailer-sendgrid-transport");
var email = require("services/email");
var template = require("templates/template");
var nodePort = 3000;

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
    var data = {};

    // validation req

	res.render('index',{title: 'Test SENDGRID'});
});

app.get('/about', function(req, res){
	res.render('about');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.post('/contact/send', function(req, res){
    // email template with dOt
    // http://olado.github.io/doT/index.html
    var emailTemplate = template.testSendgrid;

	var mailOptions = {
		to: req.body.email,
		subject: 'Nodejs Sendmail Contact',
        text: emailTemplate({
            to: req.body.email,
            name: req.body.name,
            message: req.body.message
        })
	};
    
    return email.sendMailPromise(mailOptions)
    .then(function(result) {
        console.log("Sent email to " + mailOptions.to);
        res.redirect('/');
    });
});

app.listen(nodePort);
console.log('Server is running on port ' + nodePort + '...');