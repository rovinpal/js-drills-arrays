const assert = require("assert");
const find = require("../find");

const items = [1, 2, 3, 4, 5, 5];

let findResult = find(items, el => el > 3);
assert.strictEqual(findResult, 4);

let findNone = find(items, el => el > 10);
assert.strictEqual(findNone, undefined);

console.log("'Find' test passed!");