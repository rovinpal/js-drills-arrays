

function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each

    for(let idx = 0; idx < elements.length; idx++) {
        cb(elements[idx], idx);
    }
}

const items = [1, 2, 3, 4, 5, 5];
each(items, function(value, index) {
    return `${index} : ${value}`;
});

module.exports = each;