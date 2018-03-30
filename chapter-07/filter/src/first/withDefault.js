import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const first$ = source$.first(
  x => x < 0,
  f => f,
  -1
);

first$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


