import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

const source$ = Observable.timer(1000);

source$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


