var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    var link = endpoint.slice(1);
    if(!globalCounter[link])
      globalCounter[link] = 0;
    globalCounter[link]++;

    response.statusCode = 201 
    response.end()
  } else if (request.method === 'GET') {
    var link = endpoint.slice(1)
    if(globalCounter[link])
      response.end(globalCounter[link]+'')
    response.end()
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
