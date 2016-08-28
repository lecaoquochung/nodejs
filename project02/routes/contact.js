var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

// Send Email
router.post('/send', function(req, res, next) {
    // create Reusable Transporter
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'YOUREMAIL',
            pass: 'YOURPASS'
        }
    });

    // Email Setup
    var mailOptions = {
        from: 'Brad Traversy <techguyinfo@gmail.com>',
        to: 'support@joomdigi.com',
        subject: 'Website Submission',
        // Plain Text Version
        text: 'You have a submission with the following details... Name: '+req.body.name +'Email: '+req.body.email +'Message: '+req.body.message,
        // HTML Version
        html: '<p>You got a website submission with the following details...</p><ul><li>Name: <b>'+req.body.name+'</b></li><li>Email: <b>'+req.body.email+'</b></li><li>Message: <b>'+req.body.message+'</b></li></ul>'
    };

    // Send
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        }else{
            console.log('Message sent: ' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
