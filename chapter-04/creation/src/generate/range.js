import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/generate';

const range = (start, count) => {
  const max = start + count;
  return Observable.generate(
    start,
    value => value < max,
    value => value + 1,
    value => value
  );
};

range(1, 10).subscribe(
  console.log,
  null,
  () => console.log('complete')
);


