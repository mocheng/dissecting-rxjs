
function double(arr) {
  return arr.map(item => item * 2);
}


const oneArray = [1, 2, 3];
const anotherArray = double(oneArray);
// anotherArray的内容为[2, 4, 6]
// oneArray的内容依然是[1, 2, 3]

console.log(oneArray);
console.log(anotherArray);
