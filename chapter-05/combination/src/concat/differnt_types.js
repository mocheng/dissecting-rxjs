import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concat';

const stream1$ = Observable.of(1, 2, 3);
const stream2$ = Observable.of(4, 5, 6);
const concatedStream$ = stream1$.concat(stream2$).concat('done');

concatedStream$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


