import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/isEmpty';

const source$ = Observable.empty();
const isEmpty$ = source$.isEmpty();

isEmpty$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


