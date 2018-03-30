import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/never';

const source$ = Observable.never();

source$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


