import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const source$ = Observable.from('abc');

source$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


