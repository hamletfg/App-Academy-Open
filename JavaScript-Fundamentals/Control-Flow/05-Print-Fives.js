function printFives1For(max) {
  for (let i = 0; i < max; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

printFives1For(20);
