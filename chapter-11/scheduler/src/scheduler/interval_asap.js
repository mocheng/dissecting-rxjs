import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import {asap} from 'rxjs/scheduler/asap';

const source$ = Observable.interval(1000, asap).take(3);

console.log('before subscribe');
source$.subscribe(
  value => console.log('data: ', value),
  error => console.log('error: ', error),
  () => console.log('complete')
);
console.log('after subscribe');



