import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concat';

const original$ = Observable.timer(1000, 1000);
const result$ = Observable.of('start').concat(original$);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


