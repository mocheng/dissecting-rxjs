import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/last';

const source$ = Observable.interval(1000).take(4);
const last$ = source$.last(x => x % 2 === 0);

last$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


