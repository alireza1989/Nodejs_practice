// Server code

// include http module
const http = require ("http");

// handler function
function request_handler(request, response){

  response.writeHead(200, {"Content-type" : "text/plain"});
  response.write("Hello Wolrd!");
  response.end();

}
const server = http.createServer(request_handler);

server.listen(8888, function(){
  console.log("Server is listening at http://localhost:8080");
});
