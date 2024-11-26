//create webserver
var http = require('http');
var fs = require('fs');

//create server
http.createServer(function (req, res) {
  //open file
  fs.readFile('comments.json', 'utf8', function (err, data) {
    //if there is an error, throw it
    if (err) throw err;
    //write header
    res.writeHead(200, {'Content-Type': 'application/json'});
    //write the data
    res.write(data);
    //end the response
    res.end();
  });
}).listen(3000);

//log to console
console.log('Server running at http://localhost:3000/');