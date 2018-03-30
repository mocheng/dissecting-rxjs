import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';

const source1$ = Observable.timer(0, 2000).map(x => 100 * x);
const source2$ = Observable.timer(500, 1000);

const result$ = source1$.withLatestFrom(source2$, (a,b)=> a+b);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);





