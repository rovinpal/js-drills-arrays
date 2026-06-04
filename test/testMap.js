const assert = require("assert");
const map = require("../map"); 

const items = [1, 2, 3, 4, 5, 5];

let mapResult = map(items, el => el * 2);
assert.deepStrictEqual(mapResult, [2, 4, 6, 8, 10, 10]);

console.log("'Map' test passed!");