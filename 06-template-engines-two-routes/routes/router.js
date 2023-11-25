const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: "Home"
    });
});

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: "Users",
        users,
    })
});

router.post('/add-user', (req, res, next) => {
    let { userName: name, userAge: age } = req.body;
    users.push({ name, age });
    res.redirect('/');
});

module.exports = router;