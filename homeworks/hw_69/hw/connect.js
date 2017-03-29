const connect = require('connect'),
    app = connect();
//const app = require('connect')();

app.use((req, res, next) => {
    res.write('<h1>PCS</h1><br/>');
    next();
});

app.use('/foo', (req, res, next) => {
    res.write('Foo is served<br/>');
    next();
});

app.use('/about', (req, res, next) => {
    res.write('PCS is a great company<br/>');
    next();
});

app.use('/index', (req, res, next) => {
    res.write('Home page stuff goes here<br/>');
    next();
});

app.use((req, res) => {
    res.end('<hr/><h5>Copyright 2017</h5>');
});

app.listen(80);