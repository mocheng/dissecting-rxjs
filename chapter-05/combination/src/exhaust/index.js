import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/exhaust';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const higherOrder$ = Observable.interval(1000)
  .map(() => Observable.interval(300).take(5));
const result$ = higherOrder$.exhaust();

result$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


