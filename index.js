// Using file system example

// const fs = require ("fs");
//
// fs.readFile('index.txt', function(error, data){
//
//   if(error){
//     console.log(error);
//   }
//
//     console.log(data.toString());
// });


// Add modules

// var add = require('./add');
//
// console.log(add(2, 5));

const add = require('./add');

console.log(add.one());
console.log(add.two());
console.log(add.three());
