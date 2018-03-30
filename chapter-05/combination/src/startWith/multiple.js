import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/startWith';

const original$ = Observable.timer(1000, 1000);
const result$ = original$.startWith('a', 'b', 'c');

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


