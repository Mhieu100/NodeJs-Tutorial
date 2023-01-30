// var http = require('http');
// var dt = require('./date');  (Date.js)
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write("The date and time is currently: " + dt.myDateTime());
//     res.end();
// }).listen(8080);

//--------------------------------------------------------------------------

// var http = require('http');
// http.createServer(function (req, res) {
//     // add a HTTP header:
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Hello World!');
//     res.end();
// }).listen(8080);

//--------------------------------------------------------------------------

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(201, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
// }).listen(8080);

//--------------------------------------------------------------------------

// var http = require('http');
// //create a server object:
// http.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080

//--------------------------------------------------------------------------

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write(req.url);
//     res.end();
// }).listen(8080);

//--------------------------------------------------------------------------
//Read file

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//     fs.readFile('demo_file.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         return res.end();
//     });
// }).listen(8080);

//--------------------------------------------------------------------------
//Create file

// var fs = require('fs');

// //create a file named mynewfile1.txt:
// fs.appendFile('mynew_file.txt', 'Hello content! Hieu', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

//--------------------------------------------------------------------------
// Create file

// var fs = require('fs');

// //create an empty file named mynewfile2.txt:
// fs.open('mynew_file2.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
// });

//--------------------------------------------------------------------------
// Create file

// var fs = require('fs');

// //create a file named mynewfile3.txt:
// fs.writeFile('mynew_file3.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

//--------------------------------------------------------------------------
// Update file

// var fs = require('fs');

// fs.appendFile('mynew_file3.txt', ' This is my text.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
// });

//--------------------------------------------------------------------------
// Update file

// var fs = require('fs');

// fs.writeFile('mynew_file3.txt', 'This is my text 123', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
// });

//--------------------------------------------------------------------------
// Delete file

// var fs = require('fs');

// fs.unlink('mynew_file4.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });

//--------------------------------------------------------------------------
// Rename file

// var fs = require('fs');

// fs.rename('mynew_file1.txt', 'file.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
// });

//--------------------------------------------------------------------------
// The Built-in URL Module

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// //Parse the address:
// var q = url.parse(adr, true);

// /*The parse method returns an object containing url properties*/
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// /*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);

//--------------------------------------------------------------------------
// Node.js File Server
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

//--------------------------------------------------------------------------
//--------------------------------------------------------------------------
//--------------------------------------------------------------------------