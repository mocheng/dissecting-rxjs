import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/skipWhile';

const source$ = Observable.interval(1000);
const skipWhile$ = source$.skipWhile(value => value % 2 === 0);

skipWhile$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


