import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';

const source$ = Observable.range(1, 100).map(x => x * 2);

source$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


