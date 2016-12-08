var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
    var data = {};

    // validation req

	res.render('contact',{title: 'Contact'});
});

router.post('/send', function(req, res){
    // email template with dOt
    // http://olado.github.io/doT/index.html
    // var emailTemplate = template.testSendgrid;

	// var mailOptions = {
	// 	to: req.body.email,
	// 	subject: 'Nodejs Sendmail Contact',
    //     text: emailTemplate({
    //         to: req.body.email,
    //         name: req.body.name,
    //         message: req.body.message
    //     })
	// };
    
    // return email.sendMailPromise(mailOptions)
    // .then(function(result) {
    //     console.log("Sent email to " + mailOptions.to);
    //     res.redirect('/');
    // });

    return res.redirect('/contact');
});

module.exports = router;