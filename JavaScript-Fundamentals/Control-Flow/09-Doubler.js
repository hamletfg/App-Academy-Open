// Write a function that takes an array of numbers and returns a new array
// where every element of the original array is multiplied by 2.

function doubler(numbers) {
    let doubledNums = [];

    let i = 0;
    while (i < numbers.length) {
        let oldNum = numbers[i];
        let newNum = oldNum * 2;
        // this step is important because concat does not change the original array
        doubledNums = doubledNums.concat(newNum);

        i += 1;
    }

    return doubledNums;
}

console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
console.log(doubler([7, 1, 8])); // => [14, 2, 16]
  
function doublerFor(numbers) {
    let doubledNums = [];

    for (let i = 0; i < numbers.length; i += 1) {
        let oldNum = numbers[i];
        let newNum = oldNum * 2;
        // this step is important because concat does not change the original array
        doubledNums = doubledNums.concat(newNum);
    }

    return doubledNums;
}

console.log(doublerFor([1, 2, 3, 4]));    // => [2, 4, 6, 8]
console.log(doublerFor([7, 1, 8]));    // => [14, 2, 16] 
