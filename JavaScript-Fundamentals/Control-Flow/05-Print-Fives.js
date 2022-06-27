// FOR LOOP
function printFives1For(max) { // create a function and call the paramenter "max"
  for (let i = 0; i < max; i += 1) { // create a for loop that has the variable i = 0, "i" cannot be greater than input (max), add 1 for each loop
    if (i % 5 === 0) { // this is how we make sure that the number can be divided by 5 with no remainder
      console.log(i);
    }
  }
}

printFives1For(29);


// WHILE LOOP
function printFives1(max) {
  let i = 0;
  while (i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

printFives1(19)
