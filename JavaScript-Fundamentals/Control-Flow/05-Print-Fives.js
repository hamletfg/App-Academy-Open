// From research that I've done it seems like for loops are more recommended than while loops

// FUNCTION 1
function printFives1For(max) { // create a function and call the paramenter "max"
  for (let i = 0; i < max; i += 1) { // create a for loop that has the variable i = 0, "i" cannot be greater than input (max), add 1 for each loop
    if (i % 5 === 0) { // this is how we make sure that the number can be divided by 5 with no remainder
      console.log(i);
    }
  }
}

printFives1For(19)

// FUNCTION 2
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

// FUNCTION 3
function printFives1(max) {
  let i = 0;
  while (i < max) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

// FUNCTION 4
function printFives2While(max) {
  let i = 0;
  while (i < max) {
    console.log(i);
    i+= 5;
  }
}

printFives2While(19)
