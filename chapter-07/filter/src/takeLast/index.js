import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/takeLast';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const last3$ = source$.takeLast(3);

last3$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


