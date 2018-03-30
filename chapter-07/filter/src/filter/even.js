import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/filter';

const source$ = Observable.range(1, 5);
const even$ = source$.filter(x => x % 2 === 0);

even$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


