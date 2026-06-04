function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
    list = [];
    for(let idx = 0; idx < elements.length; idx++){
        if(cb(elements[idx], idx)) {
            list.push(elements[idx]);
        }
    }

    return list;

}

const items = [1, 2, 3, 4, 5, 5];
filter(items, el => {
    el > 3
});

module.exports = filter;