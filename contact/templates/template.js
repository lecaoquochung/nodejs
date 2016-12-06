"use strict";

// Templates are made with the dot.js framework.
// http://olado.github.io/doT/
// These templates are exported as ready-to-use functions that take in
// a list of parameters and return the resulting string
var dot = require("dot");
var fs = require("fs");
var path = require("path");

var templates = {};

// no whitespace strip 
dot.templateSettings.strip = false;

function loadTemplate(fileName) {
    return dot.template(fs.readFileSync(__dirname + path.sep + fileName, "utf8"));
}

templates.testSendgrid = loadTemplate("/testSendgrid.txt");

// OpenGraph prerender templates 
// What is this ?
// This is for facebook open graph
templates.openGraph = loadTemplate("/fbheader.txt");

// html template
// html: '<p>Mail Body HTML...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'

module.exports = templates;
