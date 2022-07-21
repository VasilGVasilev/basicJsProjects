const http = require('http');
const {readFileSync} = require('fs');

// get all files

const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    const url = req.url;

    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if (url !== '/') {
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('<h1>page not found</h1>');
    }
})

server.listen(5500)