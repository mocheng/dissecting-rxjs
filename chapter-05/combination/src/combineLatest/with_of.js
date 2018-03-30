import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/combineLatest';

const source1$ = Observable.of('a', 'b', 'c');
const source2$ = Observable.of(1, 2, 3);

const result$ = source1$.combineLatest(source2$);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);





