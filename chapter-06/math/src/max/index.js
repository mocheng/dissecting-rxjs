import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/max';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const max$ = source$.max();

max$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


