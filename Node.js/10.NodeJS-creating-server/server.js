const http = require('http');
const router = require('./router/appRouter');

const hostname = '127.1.0.0';
const port  = 6000;

const server = http.createServer((request , response)=> {
    response.writeHead(200, {
        //  'Content-Type' : 'text/plain'
        'Content-Type': 'text/html'
    });
    //application routing
    router.mapRouters(request,response);

    server.listen(port, hostname, () => {
        console.log(`Node JS Server is started at http://${hostname}:${port}`);
    });
});