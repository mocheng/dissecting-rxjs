import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/concatAll';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const ho$ = Observable.interval(1000)
  .take(2)
  .map(x => Observable.interval(1500).map(y => x+':'+y).take(2));

const concated$ = ho$.concatAll();

concated$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


