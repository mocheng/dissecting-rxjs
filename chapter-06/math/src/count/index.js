import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';

const source$ = Observable.interval(100).take(10);
const count$ = source$.count();

count$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


