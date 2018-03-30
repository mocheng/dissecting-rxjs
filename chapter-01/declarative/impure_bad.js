
function arrayPush (arr, newValue) {
  arr.push(newValue);
  return arr;
}

function double(arr) {
  return arr.map(item => item * 2);
}

const originalArray = [1, 2, 3];
const pushedArray = arrayPush(originalArray, 4);
const doubledPushedArray = double(pushedArray);
const doubledOriginalArray = double(originalArray);

console.log(originalArray);
console.log(pushedArray);
console.log(doubledPushedArray);
console.log(doubledOriginalArray);
