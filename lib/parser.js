"use strict";

module.exports = function(code) {
    code = code.split(/\n::=\n/); //Maybe match /\n::=\n
    let rules = code.shift();
    rules = parseRules(rules);
    const state = code.join("\n::=\n");
    return {
        rules: rules,
        state: state
    };
};

function parseRules(rules) {
    rules.trim();
    rules = rules.split("\n");
    rules = rules.map((rule) => {
        if (!rule || rule === null) return null;
        rule = rule.split("::=");
        if (rule.length < 2) {
            console.error("Invalid rule", rule);
            return null;
        }
        const result = [];
        result.push(rule.shift());
        result.push(rule.join("::="));
        return result;
    }).filter((rule) => {
        if (!rule) return false;
        else return true;
    });
    return rules;
}
