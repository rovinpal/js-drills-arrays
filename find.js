function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
    
    for(let idx = 0; idx < elements.length; idx++){
        if(cb(elements[idx], idx)) {
            return elements[idx];
        }
    }

    return undefined;
}

const items = [1, 2, 3, 4, 5, 5];
find(items, el => {
    return el > 3
});

module.exports = find;