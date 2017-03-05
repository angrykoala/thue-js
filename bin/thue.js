const process = require('process');
const thuejs = require('../main');


const file = process.argv[2];
if (!file) return console.error("Usage: thue my_file.t");

let finalState = thuejs.executeFile(file);
console.log("Final State: " + finalState);
