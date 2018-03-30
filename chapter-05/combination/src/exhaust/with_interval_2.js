import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/exhaust';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const ho$ = Observable.interval(1000)
  .take(3)
  .map(x => Observable.interval(700).map(y => x+':'+y).take(2));
const result$ = ho$.exhaust();

result$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


