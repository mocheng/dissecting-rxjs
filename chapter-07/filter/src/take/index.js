import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';

const source$ = Observable.interval(1000);
const first3$ = source$.take(3);

first3$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


