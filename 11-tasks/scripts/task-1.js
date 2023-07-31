// Task #1

console.log("Task #1");

const http = require('http');
const os = require('os');
const path = require('path');
const port = 5000;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    const userInfo = os.userInfo().username;
    const osType = os.type();
    const osUptime = (os.uptime() / 60).toFixed(2);
    const filename = path.basename(__filename);
    const dirName = process.cwd();

    const data = 'Current user name: ' + userInfo + '\nOS type: ' + osType + '\nSystem work time: ' + osUptime + ' minutes\nCurrent work directory: ' + dirName + '\nServer file name: ' + filename;
    // const combinedDataJSON = JSON.stringify(userInfo, "<br>",osType);
    res.end(data);
}).listen(port);