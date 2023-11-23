const http = require('http');

function requestHandler(req, res) {
    const { url } = req;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello, User!</h1>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('<li>User 3</li>');
        res.write('</ul>');
        return res.end();
    }
}

const server = http.createServer(requestHandler);

server.listen(3000, console.log('Server running on http://localhost:3000'));