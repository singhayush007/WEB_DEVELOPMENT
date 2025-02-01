// Further Reading : https://nodejs.org/en/learn/getting-started/introduction-to-nodejs

const http = require('node:http');

const hostname = '127.0.0.1';
const port =3000;

const serevr =http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    res.end('Hello World\n');
});

server.listen(port , hostname, () => {
    console.log('server running at http://${hostname}:{port}/');
});