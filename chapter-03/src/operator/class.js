function Programmer() {
}

Programmer.create = function() {
  console.log('Programmer.create');
  return new Programmer();
};

Programmer.prototype.code = function() {
  console.log('Programmer.code');
  return 'Hello World';
};

const morgan = Programmer.create();
morgan.code();
