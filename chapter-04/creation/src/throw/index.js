import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

const source$ = Observable.throw(new Error('Oops'));

source$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


