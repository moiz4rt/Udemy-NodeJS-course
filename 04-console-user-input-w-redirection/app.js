const http = require('http');

function requestHandler(req, res) {
    const { url } = req;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<form action="/create-user" method="POST">');
        res.write('<input type="text" name="user" />');
        res.write('<input type="submit" value="send" />');
        return res.end();
    }
    if(url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            let parsedBody = Buffer.concat(body).toString();
            let username = parsedBody.split('=')[1];
            console.log(username);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

const server = http.createServer(requestHandler);

server.listen(3000, console.log('Server runing on port 3000'));