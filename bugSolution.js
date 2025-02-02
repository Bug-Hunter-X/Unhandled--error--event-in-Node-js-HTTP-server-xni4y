const http = require('http');

const server = http.createServer((req, res) => {
  const data = { message: 'Hello, world!' };
  res.setHeader('Content-Type', 'application/json'); // Added header
  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});