import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/never';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const ho$ = Observable.interval(1000).take(2).concat(Observable.never())
  .map(x => Observable.interval(1500).map(y => x+':'+y).take(2));
const concated$ = ho$.combineAll();

concated$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);

