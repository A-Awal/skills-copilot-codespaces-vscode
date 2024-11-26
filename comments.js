//create webserver
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

var comments = [];

var server = http.createServer(function(request, response){
    var url_parts = url.parse(request.url);
    if(url_parts.pathname === '/comment' && request.method === 'POST'){
        var body = '';
        request.on('data', function(chunk){
            body += chunk;
        });
        request.on('end', function(){
            var comment = querystring.parse(body);
            comments.push(comment);
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end('Thanks for your comment!\n'