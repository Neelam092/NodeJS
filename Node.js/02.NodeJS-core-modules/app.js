
// fs modules
let  fs = require('fs');
/*
// Synchronous Way
let fileContent = fs.readFileSync('./message.txt','utf-8');
console.log(fileContent);

let newFileContent = `Hello! This is a new file Content : ${fileContent}`;
fs.writeFileSync('data.txt', newFileContent,'utf-8');
console.log('Data is return to file');

// Asynchronous way
fs.readFile('./message.txt','utf-8', (err, data) =>{
    if(err) throw err;
  //  console.log(data);
    fs.writeFile('hello.txt', data, 'utf-8',(err)=>{
        if(err) throw  err;
        console.log('Data is return to the file');
    })
});
console.log('This is a fs core module example'); */

// JSON files
let employees = [{"id":1,"first_name":"Alphonse","last_name":"Kershaw","email":"akershaw0@jalbum.net","gender":"Female","ip_address":"227.199.182.188"},
    {"id":2,"first_name":"Elberta","last_name":"McParlin","email":"emcparlin1@dyndns.org","gender":"Genderfluid","ip_address":"39.2.225.174"},
    {"id":3,"first_name":"Zack","last_name":"Wallentin","email":"zwallentin2@a8.net","gender":"Agender","ip_address":"127.59.190.22"},
    {"id":4,"first_name":"Leonie","last_name":"Batalini","email":"lbatalini3@gmpg.org","gender":"Bigender","ip_address":"86.2.243.234"},
    {"id":5,"first_name":"Christiana","last_name":"Kochlin","email":"ckochlin4@paypal.com","gender":"Bigender","ip_address":"253.150.107.211"},
    {"id":6,"first_name":"Geoff","last_name":"Lea","email":"glea5@ox.ac.uk","gender":"Agender","ip_address":"158.199.97.188"},
    {"id":7,"first_name":"Sande","last_name":"Folke","email":"sfolke6@bing.com","gender":"Bigender","ip_address":"60.191.113.208"},
    {"id":8,"first_name":"Korie","last_name":"Wickens","email":"kwickens7@lulu.com","gender":"Agender","ip_address":"84.25.215.174"},
    {"id":9,"first_name":"Malvina","last_name":"Castelletti","email":"mcastelletti8@imgur.com","gender":"Polygender","ip_address":"254.226.112.135"},
    {"id":10,"first_name":"Minda","last_name":"Taberer","email":"mtaberer9@domainmarket.com","gender":"Polygender","ip_address":"91.101.98.203"}];

fs.writeFile('employees.json',JSON.stringify(employees),'utf-8',(err)=>{
    if(err) throw err;
    console.log('Data is written to the file');
});

// read file
fs.readFile ('employees.json','utf-8',(err,data)=>{
    if(err)throw err;
    let employees = JSON.parse(data);
    console.log(employees);
})




