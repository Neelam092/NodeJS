const bcrypt = require('bcryptjs');

let user ={
    name : 'John',
    email : 'jogn@gmail.com',
    password : 'john@123'
}
let salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password,salt);
//console.log(hashedPassword);

let updatedUser = {
    ...user,
    password: hashedPassword
};
//console.log(updatedUser);

// compare both passwords
if(bcrypt.compareSync('john@123',hashedPassword)){
    console.log('Password is matched , You are in');
}
else{
    console.log('Password is not matched, You are out');
}