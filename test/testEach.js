const assert = require("assert");
const each = require("../each");

const items = [1, 2, 3, 4, 5, 5];

let eachResult = [];
each(items, (el, i) => eachResult.push(el * 2));
assert.deepStrictEqual(eachResult, [2, 4, 6, 8, 10, 10]);

console.log("'Each' test passed!");