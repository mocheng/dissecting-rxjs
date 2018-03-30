import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';

const source1$ = Observable.timer(0, 1000).map(x => x+'A');
const source2$ = Observable.timer(500, 1000).map(x => x+'B');
const source3$ = Observable.timer(1000, 1000).map(x => x+'C');
const merged$ = source1$.merge(source2$, source3$, 2);

merged$.subscribe(
  console.log,
  err => console.log('Error: ', err),
  () => console.log('complete')
);


