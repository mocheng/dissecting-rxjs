import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/isEmpty';

const source$ = Observable.interval(1000);
const isEmpty$ = source$.isEmpty();

isEmpty$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


