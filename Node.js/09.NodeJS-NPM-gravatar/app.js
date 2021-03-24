const avatar = require('gravatar');

let user ={
    name : 'Neelam Rana',
    email : 'neelamrana092@gmail.com',
    password : '12345'
};

let avatarURL = avatar.url(user.email , {
    s : 400,
    r : 'pg',
    d : 'mm'
});

let updatedUser = {
    ...user,
    avatar : avatarURL
};
console.log(updatedUser);

