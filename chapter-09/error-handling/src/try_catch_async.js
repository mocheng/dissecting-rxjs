const invalidJsonString = 'Not Found';

try {
  setTimeout(() => {
    JSON.parse(invalidJsonString);
  }, 1000);
} catch (error) {
  console.log('catch error');
}
