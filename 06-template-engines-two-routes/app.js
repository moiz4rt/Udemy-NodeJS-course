const express = require('express');
const router = require('./routes/router');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(router);

app.use((req, res, next) => {
    res.render('404', {
        pageTitle: "Page not found"
    })
});

app.listen(3000, console.log('Server running on port 3000'));