import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/every';

const source$ = Observable.interval(1000);
const every$ = source$.every(x => x < 3);

every$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


