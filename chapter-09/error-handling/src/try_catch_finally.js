//const jsonString = 'Not Found';
const jsonString = '{"foo": "bar"}';

let result;
try {
  result = JSON.parse(jsonString);
} catch (error) {
  result = {};
} finally {
  console.log(result);
}
