const dotenv = require('dotenv');

//configure the config file
dotenv.config({path : './config/config.env'});

// to read data from the env file
let devURL = process.env.DEV_URL;
console.log(`DEV_URL : ${devURL}`);

let mongoLocal = process.env.MONGO_DB_CLOUD;
console.log(`MongoDB Local : ${mongoLocal}`);