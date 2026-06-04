function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.

    let result = [];

    for(let idx = 0; idx < elements.length; idx++){
        result.push(cb(elements[idx], idx));
    }

    return result;
}

const items = [1, 2, 3, 4, 5, 5];
map(items, el => {
    return el * 2
});

module.exports = map;