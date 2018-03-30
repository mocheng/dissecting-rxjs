import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const source1$ = Observable.interval(1000).map(x => x + 'a').take(3);
const source2$ = Observable.throw(new Error('oops'));
const concated$ = Observable.of(source1$, source2$).mergeAll();

concated$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


