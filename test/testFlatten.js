const assert = require("assert");
const flatten = require("../flatten");

const nestedArray = [1, [2], [[3]], [[[4]]]];

let flattenResult = flatten(nestedArray);
assert.deepStrictEqual(flattenResult, [1, 2, 3, 4]);

console.log("'Flatten' test passed!");
