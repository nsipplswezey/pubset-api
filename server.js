const http = require('http');
const Set = require('./es6/set.js');

const server = http.createServer();

server.on('request', function(request, response){
  const newSet = new Set();

  let body = JSON.stringify(newSet);

  response.write(body);
  response.end();
  return

})

server.listen(3000);
