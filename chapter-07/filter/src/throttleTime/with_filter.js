import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/throttleTime';

const source$ = Observable.interval(1000);
const filter$ = source$.filter(x => x % 3 === 0);
const result$ = filter$.throttleTime(2000);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


