function reduce(elements, cb, startingValue) {
    // Do NOT use .reduce to complete this function.
    // How reduce works: A reduce function combines all elements into a single value going from left to right.
    // Elements will be passed one by one into `cb` along with the `startingValue`.
    // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
    // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
    
    let accumulator;
    let startIndex;

    if (startingValue === undefined) {
        accumulator = elements[0];
        startIndex = 1;
    } else {
        accumulator = startingValue;
        startIndex = 0;
    }

    for (let idx = startIndex; idx < elements.length; idx++) {
        accumulator = cb(accumulator, elements[idx], idx);
    }

    return accumulator;
}

const items = [1, 2, 3, 4, 5, 5];
reduce(items, (acc, el) => {
    return acc + el, 0
});

module.exports = reduce;