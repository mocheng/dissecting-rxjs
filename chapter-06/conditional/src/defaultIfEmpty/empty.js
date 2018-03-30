import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/defaultIfEmpty';

const source$ = Observable.empty();
const new$ = source$.defaultIfEmpty('this is default');

new$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


