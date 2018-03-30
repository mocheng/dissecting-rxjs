import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

const source$ = Observable.interval(1000);

source$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


