const parser=require('./app/parser');
const interpreter=require('./app/interpreter');


let parsed=parser.parseFile("examples/undeterministic.t");
console.log("Parsed",parsed);
console.log("Final String",interpreter(parsed.rules,parsed.state));
