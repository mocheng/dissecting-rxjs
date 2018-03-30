import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';

const promise = Promise.resolve('good');
const sourceStream$ = Observable.from(promise);

sourceStream$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


