import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/observeOn';
import {asap} from 'rxjs/scheduler/asap';

const source$ = Observable.range(1, 3);
const asapSource$ = source$.observeOn(asap);

console.log('before subscribe');
asapSource$.subscribe(
  value => console.log('data: ', value),
  error => console.log('error: ', error),
  () => console.log('complete')
);
console.log('after subscribe');



