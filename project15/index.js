var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.send('Express is working')
});

app.listen(app.get('port'), function() {
    console.log('Express started - press Ctrl-C to stop');
});
