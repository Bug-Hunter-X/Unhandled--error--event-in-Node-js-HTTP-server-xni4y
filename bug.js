const http = require('http');

const server = http.createServer((req, res) => {
  // The following line is problematic
  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});