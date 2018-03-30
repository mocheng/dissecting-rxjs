import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/skip';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const skip$ = source$.skip(3);

skip$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


