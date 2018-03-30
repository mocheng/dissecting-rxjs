import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import {async} from 'rxjs/scheduler/async';

const source$ = Observable.range(1, 3, async);

console.log('before subscribe');
source$.subscribe(
  value => console.log('data: ', value),
  error => console.log('error: ', error),
  () => console.log('complete')
);
console.log('after subscribe');
