import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/findIndex';
import 'rxjs/add/operator/zip';

const source$ = Observable.of(3, 1, 4, 1, 5, 9);
const isEven = x => x % 2 === 0;
const find$ = source$.find(isEven);
const findIndex$ = source$.findIndex(isEven);

const zipped$ = find$.zip(findIndex$);

zipped$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


