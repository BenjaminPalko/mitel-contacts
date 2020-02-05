let http = require('http');
let url = require('url');

http.createServer(function (req, res) {
    requestListener(req, res)
}).listen(8080);


function requestListener(request, response) {
    // This is how you get parameters
    let params = url.parse(request.url, true).query;

    // Processing parameters can look like this
    for(const [key, value] of Object.entries(params)) {
        console.log(key + ": " + value);
    }
    // You can write a webpage like this
    response.write('Hello world!');
    response.end();
}
