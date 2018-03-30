import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import {asap} from 'rxjs/scheduler/asap';

const source$ = Observable.range(1, 3, asap);

console.log('before subscribe');
source$.subscribe(
  value => console.log('data: ', value),
  error => console.log('error: ', error),
  () => console.log('complete')
);
console.log('after subscribe');



