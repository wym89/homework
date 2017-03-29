const connect = require('connect'),
    app = connect(),
    url = require('url');
//qp = require('./queryParser');
//const app = require('connect')();

/*app.use((req, res, next) => {
    res.write('<h1>PCS</h1><br/>');
    next();
});*/

//app.use(qp);
app.use(require('./queryParser'));

app.use('/foo', (req, res, next) => {
    res.end('Foo is served<br/>');
});

app.use('/about', (req, res, next) => {
    res.end('PCS is a great company<br/>');
});

app.use('/sayHello', (req, res, next) => {
    res.end('Hello ' + (req.query.name || 'stranger') + '<br/>');
});

app.use('/trySomethingThatWontWork', (req, res, next) => {
    next('OOPS something went wrong');
    res.end('You wont see this<br/>');
});

app.use('/index', (req, res, next) => {
    res.end('Home page stuff goes here<br/>');
});

app.use((req, res) => {
    res.statusCode = 404;
    res.end('404. Sorry we cant find that page');
});

app.use((err, req, res, next) => {
    res.statusCode = 500;
    res.end(err || 'OOPS');
});

app.listen(80);