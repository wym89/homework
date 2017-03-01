const app = require('connect')();

app.use((request, response, next) => {
    response.write('hello world');
    next();
});

app.use(require('./readfile.js')); 

app.use('/hw',(request, response, next) => {
    response.end('doing homework');
    
}); 



app.use('/foo',(request, response, next) => {
    fs.rea
    
}); 

app.use('/donald',(request, response, next) => {
    response.end('doing homework');
    
}); 

app.use((request, response) => {
    response.end('page not found');
});

app.use((request, response, next) => {
    response.end('goodbuy world');
});


app.listen(8000);
