function sum(a, b) {
    return a+b;
}

// module.exports = sum;

function Lodash(array) {
    return array.filter( item => !!item);
}

function groupBy(array, prop){
    let result = {}
    for (let item of array) {
        let key = typeof prop === "function" ? prop(item): +item[prop];
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}

module.exports = {
    Lodash,
    groupBy,
    sum
};