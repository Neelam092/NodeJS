const store = require('./database/store/dataStore');
const util = require('./util/utility');

// call function
store.getAllEmployees((employees)=>{
    console.log(employees);
    let fileName = `customers.json`;
    util.writeToFile(fileName,JSON.stringify(employees));
});