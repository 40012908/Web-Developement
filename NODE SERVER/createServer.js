var http = require('http');
var server = http.createServer(function(req,res){ // req to get the URl, res is used to print data 
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Have a great day till 6:30");
    console.log('request url'+req.url);
    res.end();
    console.log('This will be printed last');
}).listen('3030');
//server.listen('3000');
console.log('This will be printed first');
console.log('Server running in port 3000');

