var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var ig = require('instagram-node').instagram();

ig.use({
    client_id: 'd43a8c7305c942279c53799b863a60c6',
    client_secret: 'b8c946fbbc2e4ffbad228bfccea801f0'
});

var redirect_uri = 'http://localhost:3000/handleauth';

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Connect-Flash
app.use(flash());

// Global Vars
app.use(function(req, res, next) {
    res.locals.messages = require('express-messages')(req, res);
    res.locals.moment = require('moment');

    res.locals.formatDate = function(date) {
        var myDate = new Date(date * 1000);
        return myDate.toLocaleString();
    }

    if (req.session.accesstoken && req.session.accesstoken !== undefined) {
        res.locals.isLoggedIn = true;
    } else {
        res.locals.isLoggedIn = false;
    }

    next();
});

// Home Route
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Welcome'
    });
});

// Login Route
app.get('/login', function(req, res) {
    res.redirect(ig.get_authorization_url(redirect_uri, {
        scope: ['public_content'],
        state: 'a state'
    }));
});

// Handle Route
app.get('/handleauth', function(req, res) {
    ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
        if (err) {
            console.log(err.body);
            res.send("Didn't work");
        } else {
            req.session.accesstoken = result.access_token;
            req.session.uid = result.user.id;
            ig.use({
                access_token: req.session.accesstoken
            });

            console.log('Access token: ' + result.access_token);

            res.redirect('/feed');
        }
    });
});

// Main Route
app.get('/main', function(req, res) {
    ig.user(req.session.uid, function(err, result, remaining, limit) {
        if (err) {
            res.send(err);
        } else {
            ig.user_self_media_recent({}, function(err, medias) {
                res.render('main', {
                    title: 'My Recent Images',
                    user: result,
                    medias: medias
                });
            });
        }
    });
});

app.get('/feed', function(req, res) {
    ig.user(req.session.uid, function(err, result, remaining, limit) {
        if (err) {
            res.send(err);
        } else {
            ig.user_self_feed({}, function(err, medias) {
                console.log('////////// medias: ' + JSON.stringify(medias));
                res.render('main', {
                    title: 'My Recent Images',
                    user: result,
                    medias: medias
                });
            });
        }
    });
});

// Users Image Route
app.get('/me', function(req, res) {
    ig.user(req.session.uid, function(err, result, remaining, limit) {
        if (err) {
            res.send(err);
        } else {
            ig.user_self_media_recent({}, function(err, medias) {
                console.log('////////// medias: ' + JSON.stringify(medias));
                res.render('main', {
                    title: 'My Recent Images',
                    user: result,
                    medias: medias
                });
            });
        }
    });
});

// Logout Route
app.get('/logout', function(req, res) {
    req.session.accesstoken = false;
    req.session.uid = false;
    res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
