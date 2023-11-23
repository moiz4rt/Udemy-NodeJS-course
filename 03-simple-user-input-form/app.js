const http = require('http');

function requestHandler(req, res) {
    const { url } = req;
    res.setHeader('Content-Type', 'text/html');
    if(url === '/') {
        res.write('<form action="/create-user" method="POST">');
        res.write('<input name="user" type="text" />');
        res.write('<input type="submit" value="send" />');
        res.write('</form>');
        return res.end();
    }
    if(url === '/create-user') {
        return res.end();
    }
}

const server = http.createServer(requestHandler);

server.listen(3000, console.log('Server running on http://localhost:3000'));