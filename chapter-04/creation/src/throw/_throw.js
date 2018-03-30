import {Observable} from 'rxjs/Observable';
import {_throw} from 'rxjs/observable/throw';

const source$ = _throw(new Error('Oops'));

source$.subscribe(
  console.log,
  error => console.log('catch', error),
  () => console.log('complete')
);


