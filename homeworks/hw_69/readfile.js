const url = require('url'),
        fs = require('fs');


module.exports = function (req, res, next) {
   // req.query = url.parse(req.url, true).query;

    fs.readFile('.' + req.url,  (err, data)=>{
        if(err){
            next();
        }
       // console.log('in readfile ');
        res.end(data);
        //console.log('after write');
         next();
    })
    
}