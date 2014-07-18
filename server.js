/*
 * server.js
 * Copyright (C) 2014 sushil <sushil@rogue>
 *
 * Distributed under terms of the MIT license.
 */
var express = require('express'),
    app = express(),
    ejs = require('ejs'),
    path = require('path');


app.set('views', path.join(__dirname));
app.engine('html', ejs.renderFile);
app.use(express.static(path.join(__dirname, 'js')));

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/index', function (req, res) {
    res.render('index.html');
});

app.listen(3000);
