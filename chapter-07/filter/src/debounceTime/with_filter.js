import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';

const source$ = Observable.interval(500);
const filter$ = source$.filter(x => x % 3 === 0);
const result$ = filter$.debounceTime(1000);

result$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


