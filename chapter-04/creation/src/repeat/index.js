import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/repeat';

const source$ = Observable.of(1, 2, 3);
const repeated$= source$.repeat(10);

repeated$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);



