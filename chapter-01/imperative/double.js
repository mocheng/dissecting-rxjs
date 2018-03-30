
function double(arr) {
  const results = []
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] * 2)
  }
  return results
}

console.log(double([1, 2, 3]));
