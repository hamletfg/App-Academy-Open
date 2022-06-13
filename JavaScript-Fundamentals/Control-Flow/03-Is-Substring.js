// Write a function that takes two strings: searchString, subString
// Function should return |true| if subString is part of the searchString regardless of upper or lowercase
// false if otherwise

function isSubstring(searchString, subString) {
  let lowerSearchStr = searchString.toLowerCase();
  let lowerSubStr = subString.toLowerCase();

  return lowerSearchStr.indexOf(lowerSubStr) !== -1;
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
