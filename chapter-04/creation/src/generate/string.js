import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/generate';

const stream$ = Observable.generate(
  'x',
  value => value.length <= 3,
  value => value + 'x',
  value => value
);

stream$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



