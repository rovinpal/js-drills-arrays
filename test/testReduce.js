const assert = require("assert");
const reduce = require("../reduce");

const items = [1, 2, 3, 4, 5, 5];

let reduceResult = reduce(items, (acc, el) => acc + el, 0);
assert.strictEqual(reduceResult, 20);

let reduceNoStart = reduce(items, (acc, el) => acc + el); 
assert.strictEqual(reduceNoStart, 20);

console.log("'Reduce' test passed!");