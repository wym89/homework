'use strict';

const fs = require('fs'),
    path = require('path'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    },
    util = require('util');
let cache = {};

module.exports = function (request, response, next) {
    if (request.url.length > 1) {
        console.log('File server checking', request.url);

        const ext = path.extname(request.url);
        if (ext && contentType[ext]) {
            response.setHeader('Content-type', contentType[ext]);
        }
        response.setHeader('X-Powered-By', 'PCS');

        if (cache[request.url]) {
            console.log('File server serving from cache');
            cache[request.url].accessed = new Date();
            response.end(cache[request.url].data);
        } else {
            console.log('File server checking disk');
            fs.readFile('content/' + request.url, 'utf-8', (err, data) => {
                if (err) {
                    if (err.code === 'ENOENT') {
                        next();
                    } else {
                        response.setHeader('Content-type', contentType['.html']);
                        response.statusCode = 500;
                    }
                    response.end(err.message);
                    return;
                }
                console.log('File server serving from disk');
                cache[request.url] = {
                    accessed: new Date(),
                    data: data,
                    loaded: new Date()
                };
                response.end(data);
            });
        }
    } else {
        next();
    }
}

const intervalTime = 5000;
setInterval(() => {
    console.log('File server cleaning cache');
    const cutOff = new Date() - intervalTime;
    Object.keys(cache).forEach(key => {
        if (cache[key].accessed < cutOff) {
            console.log('File server removing stale ', key, ' from cache');
            delete cache[key];
            return;
        }
        fs.stat('content/' + key, (err, stats) => {
            //console.log('stats', stats,'\n\n');
            //console.log('util.inspect', util.inspect(stats));
            if (stats && stats.mtime > cache[key].loaded) {
                console.log('File server removing modified ', key, ' from cache');
                delete cache[key];
            }
        });
    });

}, intervalTime);


