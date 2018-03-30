import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/skip';

const source$ = Observable.interval(1000);
const skip$ = source$.skip(3);

skip$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


