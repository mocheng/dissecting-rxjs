import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/takeWhile';

const source$ = Observable.range(1, 100);
const takeWhile$ = source$.takeWhile(
  value => value % 2 === 0
);

takeWhile$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


