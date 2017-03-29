'use strict';

const express = require('express'),
    app = express();

/*app.use((req, res, next) => {
    res.write('No more headers!');
    next();
});*/

app.get('/foo', (req, res, next) => {
    res.send('Hello Express World!');
});

/*app.post('/foo', (req, res, next) => {
    res.end('Hello Express World!');
});*/

app.listen(80);