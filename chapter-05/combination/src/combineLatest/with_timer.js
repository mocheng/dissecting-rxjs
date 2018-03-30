import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/combineLatest';

const source1$ = Observable.timer(500, 1000);
const source2$ = Observable.timer(1000, 1000);
const result$ = source1$.combineLatest(source2$);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);





