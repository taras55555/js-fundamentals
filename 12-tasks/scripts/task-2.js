
const myModule = require('./personalmodule');

const http = require('http');
const os = require('os');
const port = 5000;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const userInfo = os.userInfo().username;
    const data = myModule.date(userInfo);

    res.end(data);
}).listen(port);

