import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concat';

const source1$ = Observable.of(1, 2, 3);
const source2$ = Observable.of(4, 5, 6);
const concated$ = source1$.concat(source2$);

concated$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


