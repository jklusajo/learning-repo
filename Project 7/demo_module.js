var http = require('http');
var dt = require('./myfirstmodule');
// Used './' to locate the module located in the same folder as this file.

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);