
function arrayPush (arr, newValue) {
  return [...arr, newValue];
}

function double(arr) {
  return arr.map(item => item * 2);
}

const originalArray = [1, 2, 3];
const pushedArray = arrayPush(originalArray, 4);
const doubledArray = double(pushedArray);

console.log(originalArray);
console.log(pushedArray);
console.log(doubledArray);
