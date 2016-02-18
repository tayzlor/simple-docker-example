var http = require('http');

var appId = process.env.MARATHON_APP_ID || 'not found';
var hostname = process.env.HOSTNAME || 'not found';
var dockerHost = process.env.HOST || 'not found';

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'});

  res.write(
    '<!doctype html>\n<html lang="en">\n' +
    '\n<meta charset="utf-8">\n<title>Node.js simple web server</title>\n' +
    '<style type="text/css">body {width: 35em;margin: 0 auto;font-family: Tahoma, Verdana, Arial, sans-serif;}</style>\n' +
    '\n\n<h1>Hello!</h1>\n' +
    '<div id="content">\n' +
    '<p>Application version <strong>1.0.0</strong></p>' +
    '<p>If you see this page, then you are looking at a web server running in a Docker container. Here are some details about the container</p>' +
    '\n\n<p>Application ID <strong>' + appId + '</strong></p>' +
    '\n\n<p>Container ID <strong>' + hostname + '</strong></p>' +
    '\n\n<p>Running on Docker Host <strong>' + dockerHost + '</strong></p>' +
    '</div>' +
    '\n\n'
  );

  res.end();
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888');
