import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/race';
import 'rxjs/add/operator/map';

const source1$ = Observable.timer(0, 2000).map(x => x+'a');
const source2$ = Observable.timer(500, 1000).map(x => x+'b');
const winner$ = Observable.race(source1$, source2$);

winner$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


