import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/isEmpty';

const source$ = Observable.throw(new Error('wrong'));
const isEmpty$ = source$.isEmpty();

isEmpty$.subscribe(
  console.log,
  err => console.log(err),
  () => console.log('complete')
);


