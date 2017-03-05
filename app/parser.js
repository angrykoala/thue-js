function parse(code){
    code=code.split(/\n::=\n/); //Maybe match /\n::=\n
    const rules=code.shift();
    const state=code.join("\n::=\n")
    console.log("rules",rules);
    console.log("state",state);
    
}


parse(`a::=~Hello World!
::=
a
::=
b   `)
