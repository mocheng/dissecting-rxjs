const jsonString1 = '{"foo": "bar"}';
const jsonString2 = '2';
const jsonString3 = 'Not Found';

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

const nestedDelay = (callback) => {
  delayParse(jsonString1, (error, result) => {
    if (error) return callback(error);
    delayParse(jsonString2, (error, result) => {
      if (error) return callback(error);
      delayParse(jsonString3, (error, result) => {
        if (error) return callback(error);
        // do something
        callback(null, result);
      });
    });
  });
};

nestedDelay((error, result) => {
  if (error) {
    console.log('catch error: ', error);
    return;
  }
  console.log(result);
});


