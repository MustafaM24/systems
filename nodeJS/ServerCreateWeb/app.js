// // Import the 'http' module
// const http = require('http');

// // Create a server
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, Mustafa!');
// });

// // Start the server
// server.listen(3000, 'localhost', () => {
//   console.log('Server running at http://localhost:3000/');
// });

// Import the required modules
const http = require('http');
const fs = require('fs');

// Read the HTML file
const htmlFile = fs.readFileSync('index.html', 'utf8');

// Create a server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlFile);
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
