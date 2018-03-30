import {reduce} from 'rxjs/operators/reduce';
import {map} from 'rxjs/operators/map';

const sum = (source$) => {
  return source$.pipe(
    map(x => parseInt(x, 10)),
    reduce((a, b) => a + b, 0)
  );
};

export {sum};
