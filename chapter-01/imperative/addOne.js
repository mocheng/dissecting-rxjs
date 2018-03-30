
function addOne(arr) {
  const results = []
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] + 1)
  }
  return results
}

console.log(addOne([1, 2, 3]));
