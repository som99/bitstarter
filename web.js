var express = require('express');
var fh = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fh.writeFileSync('index.html',utf8));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
