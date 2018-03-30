import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const source1$ = Observable.timer(0, 1000).map(x => x + 'a').take(3);
const source2$ = Observable.timer(500, 1000).map(x => x + 'b').take(3);
const concated$ = Observable.of(source1$, source2$).mergeAll();

concated$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


