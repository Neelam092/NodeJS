// declare a function
 let greet = (name)=>{
    console.log(`Hello! ${name} `);
}

// reverse string
let convertReverse =(str)=>{
    let temp = '';
    for(let i = str.length-1; i>=0;i--){
        temp += str.charAt(i);
    }
    return temp;
}
// export function
module.exports = {
    greet,
    convertReverse
};