import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/merge';
import {asap} from 'rxjs/scheduler/asap';

const source1$ = Observable.range(1, 3);
const source2$ = Observable.range(10, 3);
const source$ = Observable.merge(source1$, source2$, 2, asap);

console.log('before subscribe');
source$.subscribe(
  value => console.log('data: ', value),
  error => console.log('error: ', error),
  () => console.log('complete')
);
console.log('after subscribe');



