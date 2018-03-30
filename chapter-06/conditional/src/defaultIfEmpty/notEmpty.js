import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/defaultIfEmpty';

const source$ = Observable.interval(1000);
const new$ = source$.defaultIfEmpty('this is default');

new$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


