import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/reduce';

const source$ = Observable.range(1, 100)
const reduced$ = source$.reduce(
  (acc, current) => acc + current,
  0
);

reduced$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);

