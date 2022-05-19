// Ex 1: Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(array) {
    return array.reduce((arr, val) => arr.concat(val), []);
}
console.log(flatten(arrays));