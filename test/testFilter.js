const assert = require("assert");
const filter = require("../filter");

const items = [1, 2, 3, 4, 5, 5];

let filterResult = filter(items, el => el > 3);
assert.deepStrictEqual(filterResult, [4, 5, 5]);

let filterNone = filter(items, el => el > 10);
assert.deepStrictEqual(filterNone, []);

console.log("'Filter' test passed!");
