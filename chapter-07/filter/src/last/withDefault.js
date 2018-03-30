import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/last';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const last$ = source$.last(
  x => x < 0,
  f => f,
  -1
);

last$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


