const http = require('http');
const Set = require('./es6/set.js');
const server = http.createServer();

function requestHandler(request, response){
  const newSet = Set();

  //receive the body

  //make a set out of it

  //send back the set

  let body = JSON.stringify(newSet);
  response.write(body);
  response.end();
  return

}

server.on('request', requestHandler)

server.listen(3000);
