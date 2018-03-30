import 'rxjs/add/operator/reduce';

const sum = (source$) => {
  return source$.reduce((a, b) => a + b, 0);
};

export {sum};
