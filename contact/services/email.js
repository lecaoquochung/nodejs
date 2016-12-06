"use strict";

var Promise = require("bluebird");
var nodemailer = require("nodemailer");
var sgTransport = require("nodemailer-sendgrid-transport");

var mail = {};

var email_from = "auto@lecaoquochung.com";
var email_from_name = "Project Learning Nodejs";

var sendgridApiKey = process.env.SENDGRID_KEY;
var sendGridUsername = process.env.SENDGRID_USERNAME;
var sendGridPassword = process.env.SENDGRID_PASSWORD;
var gmailUsername = process.env.GMAIL_USERNAME;
var gmalPassword = process.env.GMAIL_PASSWORD;

// console.log("////////// STEP 01");
var options = {
    auth: {
        api_key: sendgridApiKey
    }
};

// console.log("////////// STEP 02");
// Sendgrid transporter
var transporter = nodemailer.createTransport(sgTransport(options));
Promise.promisifyAll(transporter);

// Gmail transporter
// var transporter = nodemailer.createTransport({
// 	service: 'Gmail',
// 	auth: {
// 		user: 'your@email.com',
// 		pass: 'password'
// 	}
// });

transporter.sendEmail = function (email) {
    email.from = email.from || {
        name: email_from_name,
        address: email_from
    };

    transporter.sendMail(email, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("Sent email to " + email.to + ". Response:\n" + JSON.stringify(res, null, "  "));
        }
    });
};

mail.sendMailPromise = function (email) {
    email.from = email.from || {
        name: email_from_name,
        address: email_from
    };

    return transporter.sendMailAsync(email);
};

module.exports = mail;
