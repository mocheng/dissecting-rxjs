import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/find';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const find$ = source$.find(x => x > 10);

find$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


