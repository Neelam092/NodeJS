const fs = require('fs');
const path = require('path');

let mapRouters = (request,response)=>{
    // routing logic
    // response.end(`index.html`);// accept only string data
    let url = request.url;
    if(url === '/') {
        fs.readFile(path.join(__dirname,'..','Views','index.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);

        });
    }
    else if(url ==='/about'){
        fs.readFile(path.join(__dirname,'..','Views', 'about.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);

        });
    }
    else if(url ==='/services'){
        fs.readFile(path.join(__dirname,'..','Views', 'services.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);

        });
    }
    else if(url ==='/contact'){
        fs.readFile(path.join(__dirname,'..','Views', 'contact.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);

        });
    }
    else{
        fs.readFile(path.join(__dirname,'..','Views', '404_Not_found.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        });
    }
}


module.exports = {
    mapRouters
};