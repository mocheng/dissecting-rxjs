import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

function toObservable() {
  return Observable.from(arguments);
}

const source$ = toObservable(1, 2, 3);

source$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


