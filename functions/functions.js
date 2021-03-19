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

function renderP() {
    document.body.insertAdjacentHTML("beforeend", '<p></p>');
}

document.body.addEventListener('click', renderP);


module.exports = {
    Lodash,
    groupBy,
    sum,
    renderP
};

//exports.Lodash = Lodash;
// export default {
//     Lodash,
//     groupBy,
//     sum
// };

