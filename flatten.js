function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
    let result = [];
    for (let i = 0; i < elements.length; i++) {
        if (Array.isArray(elements[i])) {
            result = result.concat(flatten(elements[i])); // recursive flatten
        } else {
            result.push(elements[i]);
        }
    }
    return result;
}

const nestedArray = [1, [2], [[3]], [[[4]]]];
flatten(nestedArray);

module.exports = flatten;