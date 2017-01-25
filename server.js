// Server code

// include http module
// const http = require ("http");

// handler function
// function request_handler(request, response){
//
//   response.writeHead(200, {"Content-type" : "text/plain"});
//   response.write("Hello Wolrd!");
//   response.end();
//
//
//
// }
// const server = http.createServer(request_handler);
//
// server.listen(8888, function(){
//   console.log("Server is listening at http://localhost:8080");
// });


// Request methods

//include http module
const http = require('http');

// request handler
function handler (request, response){

  ///////////////////////////////////////////////////////

  // method of http request (get, post,...)
  var method = request.method;

  // http request url
  var url = request.url;

  // Header
  var headers = request.headers;

  console.log('The request metod is: ' + method);
  console.log('The request url is: ' + url);
  console.log('The request headers is:' + headers);


  ///////////////////////////////////////////////////////

  // REQUEST BODY
  // an array to put chunk of data as a set of chars
  var body = [];

  // Data event is a buffer
  request.on('data', function(data_chunk){

    body.push(data_chunk);

  }).on('end', function(){

    // concatenate data chunks and convert it to a string
    body = Buffer.concat(body).toString();
  });

  /////////////////////////////////////////////////////////

  // Request error handling

  request.on('error', function(err){
    console.error(err.stack);
  });

  /////////////////////////////////////////////////////////

  // change the status code of response
  response.statusCode = 404;

  //change header of the response
  response.setHeader('Content-type', 'application/json');
  response.setHeader('X-Powered-By', 'Awesome');

  /////////////////////////////////////////////////////////

  response.writeHead(200, {"Content-type" : "text/html"});

  //Sending response body
  response.write('<html>');
  response.write('<body>');
  response.write('<h1>Hello, World!</h1>');
  response.write('</body>');
  response.write('</html>');
  response.end();

}

// create server to listen to request on a port number
const server = http.createServer(handler);

server.listen(8080, function(){
   console.log("Server is listening at http://localhost:8080");
});
