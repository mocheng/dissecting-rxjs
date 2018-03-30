const invalidJsonString = 'Not Found';

const delayParse = (jsonString, callback) => {
  setTimeout(() => {
    try {
      const result = JSON.parse(jsonString);
      callback(null, result);
    } catch (error) {
      callback(error);
    }
  }, 1000);
};

delayParse(invalidJsonString, (error, result) => {
  if (error) {
    console.log('catch error: ', error);
    return;
  }

  console.log(result);
});


