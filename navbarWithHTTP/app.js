const http = require('http');
const {readFileSync} = require('fs');

// get all files

const homePage = readFileSync('./index.html');
const cssData = readFileSync('./main.css');
const allData = readFileSync('./all.js');
const scriptData = readFileSync('./script.js');
const logoData = readFileSync('./Green_dot_logo.png');
const bcgData = readFileSync('./headerbcg.jpg');

const server = http.createServer((req, res) => {
    const url = req.url;

    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    } else if (url === '/main.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(cssData);
        res.end();
    } else if (url === '/all.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(allData);
        res.end();
    } else if (url === '/script.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(scriptData);
        res.end();
    } else if (url === '/Green_dot_logo.png') {
        res.writeHead(200, {'content-type': 'image/png'});
        res.write(logoData);
        res.end();
    } else if (url === '/headerbcg.jpg') {
        res.writeHead(200, {'content-type': 'image/jpeg'});
        res.write(bcgData);
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.end('<h1>page not found</h1>');
    }
})

server.listen(5500)