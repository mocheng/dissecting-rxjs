import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/count';

const source$= Observable.of(1, 2, 3).concat(Observable.of(4, 5, 6));
const count$ = source$.count();

count$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


