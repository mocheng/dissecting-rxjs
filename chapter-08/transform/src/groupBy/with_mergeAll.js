import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeAll';

const source$ = Observable.interval(1000);
const groupBy$ = source$.groupBy(
  x => x % 2
).mergeAll();

groupBy$.subscribe(
  console.log,
  null,
  () => console.log('complete')
);


