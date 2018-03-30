import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const source$ = Observable.from([1, 2, 3]);

source$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


