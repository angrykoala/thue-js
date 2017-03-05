"use strict";

const fs = require('fs');

const parser = require('./lib/parser');
const interpreter = require('./lib/interpreter');

module.exports = {
    execute(code) {
        const parsed = parser(code);
        return interpreter(parsed.rules, parsed.state);
    },
    executeFile(file) {
        const data = fs.readFileSync(file, 'utf-8');
        const parsed = parser(data);
        return interpreter(parsed.rules, parsed.state);
    }
};
