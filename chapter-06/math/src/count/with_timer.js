import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/count';

const source$= Observable.timer(1000).concat(Observable.timer(1000));
const count$ = source$.count();

count$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


