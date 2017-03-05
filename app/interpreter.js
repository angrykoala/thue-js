function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = function(rules, state) {
    let finished = false;

    while (!finished) {
        const possibleRules = rules.filter((rule) => {
            return state.includes(rule[0]);
        });
        if (possibleRules.length === 0) {
            break;
        }
        const randomRule = getRandom(possibleRules);

        const matches = [];
        let index = 0;
        while (index >= 0) {
            index = state.indexOf(randomRule[0], index);
            if (index >= 0) {
                matches.push(index);
                index++;
            }
        }

        const randomMatch = getRandom(matches);
        const stateA = state.slice(0, randomMatch);
        const stateB = state.slice(randomMatch + randomRule[0].length);
        let value="";
        if(randomRule[1][0]==="~"){
            console.log(randomRule[1].substr(1));
        }else if(randomRule[1]===":::"){
            console.log("Reading from input");
        }else{
            value=randomRule[1];
        }
        state = stateA + value + stateB;
    }
    return state;
}
/*
1. Check rules that match
2. Select random rule that match
3. Replace 1 random match
*/
