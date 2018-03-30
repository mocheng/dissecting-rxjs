import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/every';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const every$ = source$.every(x => x > 0);

every$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


