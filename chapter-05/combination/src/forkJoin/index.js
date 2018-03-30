import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

const source1$ = Observable.interval(1000).map(x => x + 'a').take(1);
const source2$ = Observable.interval(1000).map(x => x + 'b').take(3);
const concated$ = Observable.forkJoin(source1$, source2$);

concated$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


