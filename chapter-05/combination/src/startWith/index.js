import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/startWith';

const original$ = Observable.timer(1000, 1000);
const result$ = original$.startWith('start');

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


