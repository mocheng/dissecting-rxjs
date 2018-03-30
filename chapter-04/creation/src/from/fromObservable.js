import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

const another$ = Observable.of(1, 2, 3);
const source$ = Observable.from(another$);

source$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


