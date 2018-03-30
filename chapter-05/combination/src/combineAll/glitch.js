import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const original$ = Observable.timer(0, 1000);
const source1$ = original$.map(x => x+'a').take(3);
const source2$ = original$.map(x => x+'b').take(3);
const concated$ = Observable.of(source1$, source2$).combineAll();

concated$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


