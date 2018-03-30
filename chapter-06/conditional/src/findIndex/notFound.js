import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/findIndex';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const findIndex$ = source$.findIndex(x => x > 10);

findIndex$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


