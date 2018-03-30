import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/never';
import 'rxjs/add/operator/isEmpty';

const source$ = Observable.never();
const isEmpty$ = source$.isEmpty();

isEmpty$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);

// make this program never exist
setInterval(f => f, 1000);


