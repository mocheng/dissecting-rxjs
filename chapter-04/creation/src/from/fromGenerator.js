import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';


function * generateNumber(max) {
  for (let i=1; i<=max; ++i) {
    yield i;
  }
}

const sourceStream$ = Observable.from(generateNumber(3));

sourceStream$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


