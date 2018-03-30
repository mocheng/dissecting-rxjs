
function arrayPush (arr, newValue) {
  return [...arr, newValue];
}

const oneArray = [1, 2, 3];
const anotherArray = arrayPush(oneArray, 4);

console.log(oneArray);
console.log(anotherArray);
