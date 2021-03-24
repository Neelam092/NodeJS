const jwt = require('jsonwebtoken');

let user = {
    id : 'abcd-001-sfsd-2399',
    name : 'john',
    email : 'john@gmail.com'
};

let payload ={
    id : user.id,
    name : user.name
};
let secretKey = 'ssshhhh';

// generate new token
let token = jwt.sign(payload, secretKey, {expiresIn : 3600});
console.log(token);

// verify token
jwt.verify(token, secretKey,(err, decoded )=>{
    if(err)throw err;
    console.log(decoded);
});