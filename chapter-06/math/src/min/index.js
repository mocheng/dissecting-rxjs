import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/min';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const min$ = source$.min();

min$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);

