import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinct';

const source$ = Observable.interval(100).map(x => x % 1000);
const distinct$ = source$.distinct(null, Observable.interval(500));

distinct$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


