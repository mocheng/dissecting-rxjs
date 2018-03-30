import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';

const source$ = Observable.range(1, 100);

source$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


