import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/expand';

const source$ = Observable.of(1);
const result$ = source$.expand(
  (value, index) => Observable.of(value * 2).delay(100)
);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


