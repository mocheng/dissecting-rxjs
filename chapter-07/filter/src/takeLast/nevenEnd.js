import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/takeLast';

const source$ = Observable.interval(1000);
const last3$ = source$.takeLast(3);

last3$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


