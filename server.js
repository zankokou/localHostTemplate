// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTgood = 7000;
var PORTbad = 7500;

function somethingGood(request, response) {
  response.end("Something good.");
};

function somethingBad(request, response){
  response.end("Something bad.")
};

var server1 = http.createServer(somethingGood);
var server2 = http.createServer(somethingBad);

// Start our server so that it can begin listening to client requests.
server1.listen(PORTgood, function() {
  console.log("Server listening on: http://localhost:" + PORTgood);
});

server2.listen(PORTbad, function() {
  console.log("Server listening on: http://localhost:" + PORTbad);
});