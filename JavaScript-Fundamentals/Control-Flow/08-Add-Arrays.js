// Write a function that takes in two arrays of numbers and
// returns the two arrays combined into a single array.

function combineArray(array1, array2) {
    let newArray = array1.concat(array2);
    return newArray;
}

console.log(combineArray([1, 2], [3, 4])); 
console.log(combineArray([17, 5], [6, 7]));
