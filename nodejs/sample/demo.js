import http from 'http';

const server = http.createServer(function (request, response) {

  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("goodbye World!\n");

});

server.listen(8000);
console.log("Server running at http://localhost:8000/");