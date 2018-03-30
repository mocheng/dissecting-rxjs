import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';

const source$ = Observable.interval(1000);
const even$ = source$.filter(x => x % 2 === 0);

even$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


