const path = require('path');
const express = require('express');

const app = express();

const router = require('./routes/router');

app.use(express.static('public'));
app.use(router);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, console.log('Server running on port 3000.'));