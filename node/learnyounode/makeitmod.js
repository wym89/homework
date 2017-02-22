var fs = require('fs');



    module.exports = function(dir, ext, callback){

            readfile = fs.readdir(dir, function callback(err, list) {
        if (err) {
            throw err;
        }
            

        filteredlist = list.filter(function (file) {
            return file.substr(file.lastIndexOf('.') ) === '.' + ext;
        });

            });

        return filteredlist;
    };

       

        
       // console.log(filteredlist);
   

