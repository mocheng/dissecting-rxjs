import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/skip';

const source$ = Observable.throw('error');
const skip$ = source$.skip(1);

skip$.subscribe(
  console.log,
  err => console.log('error: ', err),
  () => console.log('complete')
);


