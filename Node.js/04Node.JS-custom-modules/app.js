const util = require('./util/utility');

//calla fnction
util.greet('Naveen');
let message = 'Hello';
let revString = util.convertReverse(message);
console.log(`${message} -> ${revString}`);