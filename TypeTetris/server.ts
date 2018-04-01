var http = require('http');
var fs = require('fs');
var SystemJS = require('systemjs');
var port = process.env.port || 1313
http.createServer(function (request, response) {
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello World\n');
    

    // loads './app.js' from the current directory
    //SystemJS.import('modules/app.js').then(function (m) {
    //    console.log(m);
    //});
    // получаем путь после слеша
    var filePath = request.url.substr(1);
    // установка пути по умолчанию
    if (filePath == "") filePath = "views/index.html";
    fs.readFile(filePath, function (error, data) {

        if (error) {  // если файл не найден
            response.statusCode = 404;
            response.end("Not Found");
        }
        else {
            response.writeHead(200, { "Content-Type": "text/html" });  
            response.write(data);
            response.end();  
           
        }
        return;
    })
}).listen(port);