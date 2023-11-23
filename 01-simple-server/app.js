const http = require('http');

const server = http.createServer((req, res) => {
    console.log("A request!");
});

server.listen(3000, console.log('Server running on port 3000'));