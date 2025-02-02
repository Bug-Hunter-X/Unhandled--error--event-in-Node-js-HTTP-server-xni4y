# Unhandled 'error' event in Node.js HTTP server

This repository demonstrates a common error in Node.js HTTP servers where the response is not properly set up before sending JSON data. This leads to an unhandled 'error' event in the server and a network error in the client.  The solution shows how to correctly set headers before sending the response to avoid this issue.

## How to reproduce the bug:
1. Clone this repository.
2. Run `node bug.js`.
3. Try to access `http://localhost:3000` in your browser's developer console.  You'll observe a network error.

## Solution:
The solution involves setting the content-type header to application/json before sending the JSON data using `res.setHeader('Content-Type', 'application/json')`